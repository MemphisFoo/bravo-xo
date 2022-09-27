class Sexuality < ApplicationRecord
    has_many :profiles
    #    has_one :user 
    #    belongs_to :user
    # has_many :pronouns, through: :users
end
