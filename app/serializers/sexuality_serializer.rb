class SexualitySerializer < ActiveModel::Serializer
  attributes :id, :straight, :lesbian, :gay, :bisexual, :transgender_male, :transgender_female, :non_binary
end
