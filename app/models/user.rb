class User < ApplicationRecord
   has_one :profile
    # belongs_to :pronoun
    # belongs_to :sexuality
    # belongs_to :category
    # has_one :pronoun
    # has_one :sexuality

    validates :email, presence: true, uniqueness: true
    validates :username, presence: true, uniqueness: true
    has_secure_password
end
