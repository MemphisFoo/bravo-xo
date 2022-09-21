class Sexuality < ApplicationRecord
    has_many :interested_in_sexualities
    has_many :users, through: :interested_in_sexualities
end
