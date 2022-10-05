class User < ApplicationRecord
  has_one :profile

  has_many :messages_as_sender, foreign_key: :sender_id, class_name: :Message
  has_many :messages_as_receiver, foreign_key: :receiver_id, class_name: :Message

  # has_many :messages
  # has_many :conversations, through: :messages
  # has_one_attached :image
  # belongs_to :pronoun
  # belongs_to :sexuality
  # belongs_to :category
  # has_one :pronoun
  # has_one :sexuality
  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true

  # def image_url
  #   Rails.application.routes.url_helpers.url_for(image) if image.attached?
  # end
end
