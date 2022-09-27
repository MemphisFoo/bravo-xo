class ProfilesController < ApplicationController

    def show
    profile = Profile.find(params[:id])
    render json: profile, status: :ok
    end

    def index
        profiles=Profile.all
        render json: profiles, status: :ok
    end

    def update
        profile=Profile.update!(full_params)
        render json: profile, status: :accepted
    end

    private
    def full_params
        params.permit(:first_name, :last_name, :show_id, :pronoun_id, :sexuality_id, :profile_photo, :bio)
        end 
end
