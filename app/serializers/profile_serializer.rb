class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :profile_photo, :bio, :category_id, :pronoun_id, :sexuality_id
end
