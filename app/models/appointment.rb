class Appointment < ApplicationRecord
  belongs_to :case_manager
  belongs_to :client
end
