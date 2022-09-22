class Client < ApplicationRecord
    has_many :appointments
    has_many :case_managers, through: :appointments

    validates :name, :age, presence: true
end
