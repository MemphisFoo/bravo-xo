class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.integer :gender_id
      t.text :details
      t.string :username
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
