class ConversationsController < ApplicationController
  # before_action :authenticate_user

  def index
    @users = User.all
    @conversations = Conversation.all
    render json: @conversations, status: :ok
  end

  def create
    if Conversation.between(params[:sender_id], params[:recipient_id])
      .present?
      @conversation = Conversation.between(params[:sender_id], params[:recipient_id]).first
      render json: @conversation, status: :ok
    else
      @conversation = Conversation.create!(conversation_params)
      render json: @conversation, status: :ok
    end
    redirect_to conversation_messages_path(@conversation)
  end

  private

  def conversation_params
    params.permit(:sender_id, :recipient_id)
  end
end
