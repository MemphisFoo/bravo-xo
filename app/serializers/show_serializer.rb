class ShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :profiles

  has_many :profiles
  has_many :users

  # def profile
  #   "#{self.object.profiles}"
  # end
end
