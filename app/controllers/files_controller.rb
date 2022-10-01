class FilesController < ApplicationController
    # skip_before_action :authorized_case_manager, only: [:create]
    before_action :authorized_case_manager, only: [:show, :create]

    def index
        render json: File.all
        # render json: files, status: :ok
    end

    # def show
    #     file = File.find(params[:id])
    #     render json: file, status: :ok
    # end

    def create 
        file = File.create(file_params)
        render json: file, status: :created
    end

    private
    def file_params
        params.permit(:name, :note, :upload, :case_manager_id )
    end
end