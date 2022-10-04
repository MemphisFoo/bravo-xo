class User < ApplicationRecord
  has_one :profile
  has_many :messages
  has_many :chatrooms, through: :messages
  has_one_attached :image
  # belongs_to :pronoun
  # belongs_to :sexuality
  # belongs_to :category
  # has_one :pronoun
  # has_one :sexuality
  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true

  def image_url
    Rails.application.routes.url_helpers.url_for(image) if image.attached?
  end
end
