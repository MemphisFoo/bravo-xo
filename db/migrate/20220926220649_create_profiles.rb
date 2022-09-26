class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :first_name
      t.string :last_name
      t.text :profile_photo
      t.text :bio
      t.integer :show_id
      t.integer :pronoun_id
      t.integer :sexuality_id

      t.timestamps
    end
  end
end
