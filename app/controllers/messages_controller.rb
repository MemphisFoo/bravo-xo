class MessagesController < ApplicationController
  def index
    messages = Message.all
    render json: messages
  end

  def create
    conversation = Conversation.find(params[:conversation_id])

    message = Message.new(messages_params)
    message.user = @current_user
    message.conversation = conversation
    message.save!
    #

    broadcast conversation
    #byebug
    render json: message, status: :created
  end

  def update
    message = message.find(params[:id])
    message.update(messages_params)
    render json: message
  end

  def destroy
    message = Message.find(params[:id])
    conversation = message.conversation
    message.delete
    broadcast conversation
  end

  private

  def message_params
    params.require(:message).permit(:body, :user_id)
  end

  def broadcast(conversation)
    # ActiveModelSerializers::SerializableResource.new(object).as_json
    # returns the same thing sent by render json: object
    ConversationsChannel.broadcast_to(conversation, ActiveModelSerializers::SerializableResource.new(conversation).as_json)
  end

  # def index
  #   messages = Message.all
  #   render json: messages
  # end

  # def create
  #   message = Message.new(messages_params)
  #   #byebug
  #   if message.save
  #     #byebug
  #     chatroom = message.chatroom
  #     ChatroomsChannel.broadcast_to(chatroom, {
  #       chatroom: chatroom,
  #       users: chatroom.users,
  #       messages: chatroom.messages,
  #     })
  #   end
  #   #byebug
  #   render json: message
  # end

  # def update
  #   message = message.find(params[:id])
  #   message.update(messages_params)
  #   render json: message
  # end

  # def destroy
  #   message = Message.find_by(id: params[:id])
  #   message.delete
  #   head :no_content
  # end

  # private

  # def messages_params
  #   params.require(:message).permit(:message_body, :user_id, :chatroom_id)
  # end
end
