class CaseManagerSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :email, :image_path
  has_many :clients

  def image_path
    rails_blob_path(object.upload, only_path: true) if object.upload.attached?
  end

end
