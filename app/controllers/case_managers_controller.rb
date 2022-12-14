class CaseManagersController < ApplicationController
    # rescue_from ActiveRecord::RecordInvalid, with: :invalid_record  
    skip_before_action :authorized_case_manager, only: [:create]
    include ActiveStorage::Blob::Analyzable
    
    def index
        case_managers = CaseManager.all
        render json: case_managers, status: :ok
    end

    def show
        case_manager = current_case_manager
        render json: case_manager, status: :ok
        # if current_case_manager
        #     render json:current_case_manager, status: :ok
        # else
        #     render json: {error: "No current session stored"}, status: :unauthorized
        # end
    end

    def file_upload
        caseManager = current_case_manager
        caseManager.upload= params[:upload]
        caseManager.save
        render json: caseManager, status: :ok
    end

    def set_upload
        caseManager = current_case_manager
        if caseManager
            caseManager.upload.attach(params[:upload])
        else
            render json: {error: "Image Upload"}
        end
    end

    def update
        caseManager = CaseManager.find(params[:id])
        caseManager.update!(case_manager_params)
        render json: caseManager, status: :accepted
    end

    def create
        case_manager = CaseManager.create!(case_manager_params)
        if case_manager.valid?
            session[:case_manager_id] = case_manager.id
            render json: case_manager, status: :ok
        else
            render json: case_manager.errors.full_messages, status: :unprocessable_entity
        end
    end

    private
    def case_manager_params
        params.permit(:name, :email, :password, :upload)
    end

    def file_test_params
        params.permit(:upload)
    end

    # def render_unprocessable_entity_response(invalid)
    #     render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    # end

end
