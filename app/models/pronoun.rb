class Pronoun < ApplicationRecord
    has_many :profiles
    # has_one :profile
    #    has_one :user
    #    belongs_to :user
    # has_many :sexualities, through: :users
end
