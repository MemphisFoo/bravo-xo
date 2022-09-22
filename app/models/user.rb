class User < ApplicationRecord

    #Users
    has_many :user_sexualities
    has_many :sexualities, through: :user_sexualities

    #Conversations
    has_many :participants
    has_many :conversations, through: :participants

    has_secure_password
end
