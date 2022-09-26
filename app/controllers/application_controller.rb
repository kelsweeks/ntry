class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authenticate_case_manager

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found


    # def hello_world
    #     session[:count] = (session[:count] || 0) + 1
    #     render json: { count: session[:count] }
    # end

    private

    def current_case_manager 
        @current_case_manager ||= CaseManager.find_by_id(session[:case_manager_id])
    end

    def render_not_found(not_found)
        render json: { error: "#{not_found.model} not found" }, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def authenticate_case_manager
        render json: { errors:  "Not Authorized"}, status: :unauthorized 
        unless current_case_manager
    end
    
    def is_authorized?
        permitted = current_case_manager.admin?
        render json: { errors: "does not have admin permission"}, status: :forbidden unless permitted
    end
end