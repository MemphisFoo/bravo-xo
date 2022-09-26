class Pronoun < ApplicationRecord
    has_many :users
    has_many :sexualities, through: :users
end
