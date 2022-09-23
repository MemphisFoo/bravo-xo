class UserSexualitySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :sexuality_id
  has_many :users
end
