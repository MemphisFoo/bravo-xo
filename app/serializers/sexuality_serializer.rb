class SexualitySerializer < ActiveModel::Serializer
  attributes :id, :choose
  has_many :users
end
