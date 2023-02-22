class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :bio, :sexuality_id, :show_id, :user_id, :pronoun_id, :profile_pic_url, :sexuality, :pronoun, :show, :user

  def sexuality
    self.object.sexuality.choose
  end

  def pronoun
    self.object.pronoun.preference
  end

  def show
    self.object.show.title
  end

  def username
    self.object.user.username
  end

  # $ don't necessarily need these in the serializer
  # has_one :sexuality
  # has_one :show
  # has_one :user
  # has_one :pronoun
end
