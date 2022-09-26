class Pronoun < ApplicationRecord
   has_one :user
#    belongs_to :user
    # has_many :sexualities, through: :users
end
