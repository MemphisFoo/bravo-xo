class PronounSerializer < ActiveModel::Serializer
  attributes :id, :preference
  has_many :users
end
