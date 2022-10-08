class ProfileWithoutPicSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :bio, :sexuality, :show, :user, :pronoun
end
