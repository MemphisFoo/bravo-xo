class CreateProfilePhotos < ActiveRecord::Migration[7.0]
  def change
    create_table :profile_photos do |t|
      t.integer :profile_id

      t.timestamps
    end
  end
end
