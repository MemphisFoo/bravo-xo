class CreateUserSexualities < ActiveRecord::Migration[7.0]
  def change
    create_table :user_sexualities do |t|
      t.integer :user_id
      t.integer :sexuality_id

      t.timestamps
    end
  end
end
