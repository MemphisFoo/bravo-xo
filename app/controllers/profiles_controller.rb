class ProfilesController < ApplicationController

    def show
    profile = Profile.find(params[:id])
    render json: profile, status: :ok
    end

    def index
        profiles=Profile.all
        render json: profiles, status: :ok
    end
end
