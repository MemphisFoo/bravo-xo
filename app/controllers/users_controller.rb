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

    def update
       user=User.update!(full_params) 
       render json: user, status: :accepted
    end

    def search
        user=find_user
        render json: user, status: :ok
    end

    private

    def full_params
    params.permit(:first_name, :last_name, :username, :pronoun_id, :sexuality_id, :profile_photo, :bio, :password, :email, :password_confirmation,)
    end    
    
    def user_params
        params.permit(:username, :password, :email, :password_confirmation)
    end

    def user_search_params
        params.permit(:username, :first_name, :last_name)
    end

    def find_user
        User.find(user_search_params) 
    end  

end
