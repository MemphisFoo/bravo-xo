class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :password_digest
  
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
