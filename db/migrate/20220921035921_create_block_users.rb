class CreateBlockUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :block_users do |t|
      t.integer :user_id
      t.integer :user_id_blocked

      t.timestamps
    end
  end
end
