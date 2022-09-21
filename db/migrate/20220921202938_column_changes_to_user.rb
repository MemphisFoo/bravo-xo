class ColumnChangesToUser < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :gender_id, :profile_photo
  end
end
