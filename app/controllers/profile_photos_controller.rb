class ProfilePhotosController < ApplicationController
  def create
    profile_photo = ProfilePhoto.create(photo_params)
    render json: profile_photo, status: :created
  end

  def index
    profile_photo = ProfilePhoto.all
    render json: profile_photo, status: :ok
  end

  def show
    profile_photo = ProfilePhoto.find(params[:id])
    render json: profile_photo, status: :ok
  end

  def current_user_photos
    photos = ProfilePhoto.where(profile_id: params[:id])
    if photos.exists?
      render json: photos.last, status: :ok
    else
      render json: { image_url: "https://i0.wp.com/researchictafrica.net/wp/wp-content/uploads/2016/10/default-profile-pic.jpg?ssl=1" }
    end
  end

  private

  def photo_params
    params.permit(:image, :profile_id)
  end
end
