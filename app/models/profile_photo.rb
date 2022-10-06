class ProfilePhoto < ApplicationRecord
  has_one_attached :image
  belongs_to :profile

  def image_url
    Rails.application.routes.url_helpers.url_for(image) if image.attached?
  end
end
