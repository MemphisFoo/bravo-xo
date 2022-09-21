class CreateInterestedInSexualities < ActiveRecord::Migration[7.0]
  def change
    create_table :interested_in_sexualities do |t|
      t.integer :user_id
      t.integer :sexuality_id

      t.timestamps
    end
  end
end
