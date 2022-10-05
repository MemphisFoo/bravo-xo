class MessagesController < ApplicationController
  before_action do
    @conversation = Conversation.find(params[:conversation_id])
    render json: @conversation, status: :ok
  end

  def index
    @messages = @conversation.messages
    if @messages.length > 10
      @over_ten = true
      @messages = @messages[-10..-1]
    end
    if params[:m]
      @over_ten = false
      @messages = @conversation.messages
    end
    if @messages.last
      if @messages.last.user_id != current_user.id
        @messages.last.read = true
      end
    end
    @message = @conversation.messages.new
    render json: @message, status: :ok
  end

  def new
    @message = @conversation.messages.new
    render json: @message, status: :ok
  end

  def create
    @message = @conversation.messages.new(message_params)
    if @message.save
      redirect_to conversation_messages_path(@conversation)
    end
    render json: @message, status: :ok
  end

  private

  def message_params
    params.require(:message).permit(:body, :user_id)
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
