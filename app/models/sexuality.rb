class Sexuality < ApplicationRecord
   has_one :user 
#    belongs_to :user
    # has_many :pronouns, through: :users
end
