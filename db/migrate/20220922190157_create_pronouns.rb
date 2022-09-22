class CreatePronouns < ActiveRecord::Migration[7.0]
  def change
    create_table :pronouns do |t|
      t.text :option
      t.integer :user_id

      t.timestamps
    end
  end
end
