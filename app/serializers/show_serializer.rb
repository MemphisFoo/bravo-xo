class ShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :acronymn, :profiles, :users

  has_many :profiles
  has_many :users

  # def profiles
  #   self.object.profiles
  # end
end
