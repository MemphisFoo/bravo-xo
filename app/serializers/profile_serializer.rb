class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :bio, :sexuality_id, :show_id, :user_id, :pronoun_id, :profile_pic_url

  has_one :sexuality
  has_one :show
  has_one :user
  has_one :pronoun
end
