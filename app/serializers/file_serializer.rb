class FileSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :note, :upload
  has_one :case_manager

  def upload
    rails_blob_path(object.upload, only_path: true) if object.upload.attached?
  end

end
