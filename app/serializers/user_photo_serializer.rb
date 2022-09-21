class UserPhotoSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :link, :details, :time_added, :active
end
