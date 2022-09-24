class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :username
      t.text :profile_photo
      t.text :bio
      t.integer :pronoun_id
      t.integer :sexuality_id
      t.string :password_digest

      t.timestamps
    end
  end
end
