module ApplicationCable
  class Connection < ActionCable::Connection::Base
  #   # identified_by :current_user

  #   def connect
  #     self.current_user=find_verified_user
  # end

  # private

  # def find_verified_user
  #   # byebug
  #   if verified_user=User.find(cookies.encrypted['_session_id']['user_id'])
  #     verifird_user
  #     # byebug
  #   else
  #     reject_unauthorized_connectiopn
  #   end
  # end

end
