class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :gender_id, :details, :username, :email, :password_digest
end
