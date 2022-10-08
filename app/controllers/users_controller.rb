class UsersController < ApplicationController
  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      Profile.create(user_id: user.id, first_name: "", last_name: "", bio: "", sexuality_id: 1, show_id: 1, pronoun_id: 1)
      render json: user, status: :created
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    if current_user
      render json: current_user, status: :ok
    else
      render json: "No current session stored", status: :unauthorized
    end
  end

  def index
    users = User.all
    render json: users, status: :ok
  end

  def update
    user = User.update!(full_params)
    render json: user, status: :accepted
  end

  def search
    user = User.find(user_search_params)
    render json: user, status: :ok
  end

  private

  def full_params
    params.permit(:first_name, :last_name, :username, :bio, :pronoun_id, :sexuality_id, :show_id, :password, :email, :password_confirmation)
  end

  def user_params
    params.permit(:username, :password, :email, :password_confirmation, :profile_id)
  end

  def user_search_params
    params.permit(:username, :first_name, :last_name)
  end
end
