class GradeSerializer < ActiveModel::Serializer
  attributes :id, :user_id_given, :user_id_received, :grade
end
