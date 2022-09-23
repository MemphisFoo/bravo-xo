class ChoosePronounsController < ApplicationController

    def index
        pronouns=ChoosePronoun.all
        render json: pronouns, status: :ok
    end
end
