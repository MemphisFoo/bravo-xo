class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :time_started, :time_closed
end
