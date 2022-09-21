class User < ApplicationRecord

    #Users
    has_many :interested_in_sexualities
    has_many :sexualities, through: :interested_in_sexualities

    #Conversations
    has_many :participants
    has_many :conversations, through: :participants

    has_secure_password
end
