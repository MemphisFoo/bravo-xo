class ProfileWithoutPicSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :bio, :sexuality_id, :show_id, :user_id, :pronoun_id, :sexuality, :pronoun, :show

  def sexuality
    self.object.sexuality.choose
  end

  def pronoun
    self.object.pronoun.preference
  end

  def show
    self.object.show.title
  end
end
