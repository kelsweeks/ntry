class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :not_found


    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end

    # def current_user 
    #     @current_user||=User.find_by(id: session[:user_id])
    # end

    private
    def render_not_found_response(not_found)
        render json: { error: "#{not_found.model} not found" }, status: :not_found
    end
    
end
