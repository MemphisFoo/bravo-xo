class RemoveUserPhotosTable < ActiveRecord::Migration[7.0]
  def change
    drop_table :user_photos
  end
end
