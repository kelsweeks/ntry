class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :date_of_birth, :address, :phone, :email, :medical_history
end
