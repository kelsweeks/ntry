class SessionsController < ApplicationController
    skip_before_action :authorized_case_manager, except: :destroy
    # login
    def create 
        case_manager = CaseManager.find_by(name: params[:name])
        if case_manager&.authenticate(params[:password])
            session[:case_manager_id] = case_manager.id 
            render json: case_manager, status: :created
        else 
            render json: {error: "Invalid Credentials"}, status: :unauthorized
        end
    end

    # login
    def destroy
        session.delete :case_manager_id
    end
end