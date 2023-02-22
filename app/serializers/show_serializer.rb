class ShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :profiles, :users

  has_many :profiles
  has_many :users

  # def profile
  #   "#{self.object.profiles}"
  # end
end
