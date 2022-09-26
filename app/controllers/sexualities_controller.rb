class SexualitiesController < ApplicationController
    def index
        sexualities=Sexuality.all
        render json: sexualities, status: :ok
    end
end
