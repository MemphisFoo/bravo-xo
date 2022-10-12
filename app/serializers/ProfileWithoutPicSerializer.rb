class ProfileWithoutPicSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :bio, :sexuality_id, :show_id, :user_id, :pronoun_id
end
