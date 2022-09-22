class Sexuality < ApplicationRecord
    has_many :user_sexualities
    has_many :users, through: :user_sexualities
end
