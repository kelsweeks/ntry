class CaseManagersController < ApplicationController
# rescue_from ActiveRecord::RecordInvalid, with: :invalid_record  

    def index
        case_managers = CaseManager.all
        render json: case_managers, status: :ok
    end

    def show
        if current_user
            render json:current_user, status: :ok
        else
            render json: {error: "not current user stored"}, status: :unauthorized
        end
    end

    # private
    # def case_manager_params
    #     params.permit(:name, :email, :password)
    # end
end
