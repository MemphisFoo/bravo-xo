class User < ApplicationRecord

    #Users
    belongs_to :sexuality
    belongs_to :choose_pronoun

    #Conversations
    has_many :participants
    has_many :conversations, through: :participants

    has_secure_password
end
