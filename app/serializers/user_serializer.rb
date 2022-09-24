class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :username, :profile_photo, :bio, :pronoun_id, :sexuality_id, :password_digest
end
