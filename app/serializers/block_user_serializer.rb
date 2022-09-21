class BlockUserSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :user_id_blocked
end
