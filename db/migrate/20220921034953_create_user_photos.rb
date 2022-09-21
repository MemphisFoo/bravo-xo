class CreateUserPhotos < ActiveRecord::Migration[7.0]
  def change
    create_table :user_photos do |t|
      t.integer :user_id
      t.text :link
      t.text :details
      t.timestamp :time_added
      t.boolean :active

      t.timestamps
    end
  end
end
