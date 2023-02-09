class ConversationsChannel < ApplicationCable::Channel
  def subscribed
    stop_all_streams
    conversation = Conversation.find(params[:conversation_id])
    stream_for conversation
  end

  # def received data
  #     # byebug
  #     ChatroomsChannel.broadcast_to(@chatroom,{chatroom:@chatroom, users: @chatroom.users, messages:@chatroom.messages})
  # end

  def unsubscribed
    stop_all_streams
  end
end
