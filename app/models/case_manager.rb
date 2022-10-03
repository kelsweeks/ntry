class CaseManager < ApplicationRecord
    has_many :appointments
    has_many :clients, through: :appointments
    has_secure_password
    has_one_attached :upload
end
