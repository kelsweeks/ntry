class CaseManager < ApplicationRecord
    has_many :appointments
    has_many :clients, through: :appointments
    has_secure_password
    has_one_attached :upload

    def get_upload_url
        url_for(self.upload)
    end
end
