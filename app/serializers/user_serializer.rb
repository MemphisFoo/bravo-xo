class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :profile_photo, :bio, :username, :choose_pronoun_id, :user_sexuality_id, :email, :password_digest
end
