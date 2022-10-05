class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :profile_photo, :bio, :sexuality, :show, :user, :pronoun
  # :image_url

  has_one :sexuality
  has_one :show
  has_one :user
  has_one :pronoun
end
