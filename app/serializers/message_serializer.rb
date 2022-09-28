class MessageSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :chatroom_id
  belongs_to :user
  belongs_to :chatroom
end
