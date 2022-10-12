class ProfilesController < ApplicationController
  def index
    profiles = Profile.all
    render json: profiles, status: :ok
  end

  def create
    #binding.break
    profile = Profile.create(full_params)
    render json: profile, status: :created
  end

  def show
    profile = Profile.find(params[:id])
    render json: profile, status: :ok
  end

  def update
    # binding.break
    profile = Profile.find(params[:id])
    profile.update!(full_params)
    render json: profile, serializer: ProfileWithoutPicSerializer
  end

  def update_profile_pic
    profile = Profile.find(params[:id])
    profile.update(profile_pic: params[:profile_pic])
    render json: profile
  end

  private

  def full_params
    params.permit(:first_name, :last_name, :bio, :show_id, :pronoun_id, :sexuality_id, :user_id)
  end
end
