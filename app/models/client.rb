class Client < ApplicationRecord
    has_many :appointments
    has_many :case_managers, through: :appointments
    # has_many_attached :files
    validates :name, :age, presence: true
end
