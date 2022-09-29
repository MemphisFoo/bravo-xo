class ShowsController < ApplicationController

    def index
    shows=Show.all
    render json: shows, status: :ok
    end
end
