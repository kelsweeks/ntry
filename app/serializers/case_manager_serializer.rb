class CaseManagerSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :email, :image_path
  has_many :clients

  def image_path
    rails_blob_path(object.upload, only_path: true) if object.upload.attached?
    # object.image_path.blob.attributes
    #   .slice('filename', 'byte_size')
    #   .merge(url: image_url)
    #   .tap{ |attrs| attrs['name'] = attrs.delete('filename')}
  end

  # def image_url
  #   url_for(obj.image_path)
  # end

end
