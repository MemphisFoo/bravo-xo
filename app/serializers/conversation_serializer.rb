class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :message
  has_many :users
end
