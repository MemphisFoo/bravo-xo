class ProfilesController < ApplicationController
  def show
    profile = Profile.find(params[:id])
    render json: profile, status: :ok
  end

  def index
    profiles = Profile.all
    render json: profiles, status: :ok
  end

  def create
    #binding.break
    profile = Profile.create(full_params)
    render json: profile, status: :created
  end

  def update
    # binding.break
    profile = Profile.find(params[:id])
    profile.update!(full_params)
    render json: profile, serializer: ProfileWithoutPicSerializer
  end

  def update_image
    profile = Profile.find(params[:id])
    profile.update(image: params[:image])
    render json: profile
  end

  private

  def full_params
    params.permit(:first_name, :last_name, :show, :pronoun, :sexuality, :bio, :user)
  end
end
