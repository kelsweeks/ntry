class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :description
  has_one :case_manager
  has_one :client
end
