class PronounsController < ApplicationController

    def index
       pronouns=Pronoun.all
       render json: pronouns, status: :ok 
    end
end
