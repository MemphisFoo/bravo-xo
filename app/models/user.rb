class User < ApplicationRecord
   has_one :profile
    # belongs_to :pronoun
    # belongs_to :sexuality
    # belongs_to :category
    # has_one :pronoun
    # has_one :sexuality
    has_secure_password
    
    validates :email, presence: true, uniqueness: true
    validates :username, presence: true, uniqueness: true
    
end
