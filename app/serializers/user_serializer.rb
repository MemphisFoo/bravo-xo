class UserSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :email, :username, :password_digest
  # :image_url

  # attribute :chatrooms do |user|
  #   user.chatrooms.uniq
  # end
  has_one :profile
  # has_many :conversations
end
