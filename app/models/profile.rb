class Profile < ApplicationRecord
  belongs_to :sexuality
  belongs_to :pronoun
  belongs_to :user
  belongs_to :show

  # def image_url
  #   Rails.application.routes.url_helpers.url_for(image) if image.attached?
  # end
end
