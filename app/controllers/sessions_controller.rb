class SessionsController < ApplicationController
    def create 
        user = CaseManager.find_by(name: params[:name])
        if user&.authenticate(params[:password])
            session[:case_manager_id] = user.id 
            render json: case_manager, status: :created
        else 
            render json: {error: {login: "Invalid name or password"}}, status: :unauthorized
        end
    end
end