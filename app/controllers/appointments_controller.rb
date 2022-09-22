class AppointmentsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def index
        appointments = Appointment.all
        render json: appointments, status: :ok
    end

    def show
        appointment = Appointment.find(params[:id])
        render json: appointment, status: :ok
    end

    def create
        appointment = Appointment.create!(appointment_params)
        if appointment
            render json: appointment, status: :created
        else
            render json: appointment.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        appointment = Appointment.find(params[:id])
        appointment.update!(appointment_params)
        render json: appointment, status: :accepted
    end

    def destroy
        appointment = Appointment.find(params[:id])
        appontment.destroy
        head :no_content
    end


    private
    def appointment_params
        params(permit( :date, :case_manager_id, :client_id ))
    end

    def render_not_found_response(not_found)
        render json: { error: "#{not_found.model} not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
