class User < ApplicationRecord
    belongs_to :sexuality 
    belongs_to :pronoun

    has_secure_password
end
