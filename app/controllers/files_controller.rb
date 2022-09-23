class FilesController < ApplicationController
    
    def index
        files = File.all
        render json: files, status: :ok
    end

    def show
        file = File.find(params[:id])
        render json: file, status: :ok
    end

    def create 
        file = File.create(file_params)
        render json: file, status: :created
    end

    private
    def file_params
        params.require(:file).permit(:name, :note, :case_manager_id, :upload)
    end
end