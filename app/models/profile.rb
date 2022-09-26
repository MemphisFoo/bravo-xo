class Profile < ApplicationRecord
    belongs_to :sexuality
    belongs_to :pronoun
    belongs_to :user
end
