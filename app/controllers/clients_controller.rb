class ClientsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

    def index
        clients = Client.all
        render json: clients, status: :ok
    end

    def show
        client = Client.find(params[:id])
        render json: client, status: :ok
    end

    def create
        client = Client.create!(client_params)
        if client
            render json: client, status: :created
        else
            render json: client.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        client = Client.find(params[:id])
        client.update!(client_params)
        render json: client, status: :accepted
    end

    def destroy
        client = Client.find(params[:id])
        client.destroy
        head :no_content
    end




    private

    def client_params
        params.permit(:name, :age, :date_of_birth, :address, :phone, :email, :medical_history)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
