class ShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :profiles

  has_many :profiles

  # def profile
  #   "#{self.object.profiles}"
  # end
end
