class ProfilesController < ApplicationController
  def index
    if params[:show_id]
      show = Show.find(params[:show_id])
      profiles = show.profiles
      else
        profiles = Profile.all
      end
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

  def show_user
    show_user = Profile.find(params[:user])
    render json: show_user, serializer:ProfileWithoutPicSerializer
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
