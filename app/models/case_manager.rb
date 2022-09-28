class CaseManager < ApplicationRecord
    has_many :appointments
    has_many :clients, through: :appointments
    has_many_attached :files
    has_secure_password
end
