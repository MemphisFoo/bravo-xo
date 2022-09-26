class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :password_digest, :first_name, :last_name, :profile_photo, :bio, :category_id, :sexuality_id, :pronoun_id, :category, :sexuality, :pronoun
  
  def user
    "#{object.user}"
    end
  
    def sexuality
    "#{object.sexuality.choose}"
    end
  
    def pronoun
    "#{object.pronoun.preference}"
    end

    def category
    "#{object.category.show}"
    end
end
