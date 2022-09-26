class Sexuality < ApplicationRecord
    has_many :users
    has_many :pronouns, through: :users
end
