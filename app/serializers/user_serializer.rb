class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :username, :profile_photo, :bio, :pronoun_id, :sexuality_id, :password_digest, :pronoun, :sexuality
 
  has_one :sexuality 
  has_one :pronoun

  def sexuality
  "#{object.sexuality.choose}"
  end

  def pronoun
  "#{object.pronoun.preference}"
  end
end
