class ShowsController < ApplicationController
  def index
    shows = Show.all
    render json: shows, status: :ok
  end

  def show
    show = Show.find(params[:id])
    render json: show, status: :ok
  end

  # def show_users
  #   show_users = Show.find(params[:users])
  #   render json: show_users, serializer: ShowSerializer
  # end

  private

  # def profile_params
  #   params.permit(:profile, :title)
  # end
end
