class ChatroomSerializer < ActiveModel::Serializer
  attributes :id, :message
  has_many :users
end
