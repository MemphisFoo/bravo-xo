class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :profile_photo, :bio, :pronouns :username, :email, :password_digest
end
