class File < ApplicationRecord
    has_one_attached :upload
    belongs_to :case_manager
end