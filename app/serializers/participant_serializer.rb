class ParticipantSerializer < ActiveModel::Serializer
  attributes :id, :conversation_id, :user_id, :time_joined, :time_left
end
