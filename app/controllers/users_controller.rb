class UsersController < ApplicationController

    def create
        user=User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :ok
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
        users=User.all
        render json: users, status: :ok
    end

    private

    def user_params
        params.permit(:username, :password, :email, :password_confirmation)
    end

    def find_user
        User.find(params[:id]) 
    end    
end
