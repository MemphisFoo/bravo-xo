class ProfilePhotoSerializer < ActiveModel::Serializer
  attributes :id, :profile_id, :image_url
  belongs_to :profile
end
