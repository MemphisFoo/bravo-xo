class Conversation < ApplicationRecord
    belongs_to :user
    # has_many :participants
    # has_many :messages, through: :participants
end
