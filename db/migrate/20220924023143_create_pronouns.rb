class CreatePronouns < ActiveRecord::Migration[7.0]
  def change
    create_table :pronouns do |t|
      t.string :preference

      t.timestamps
    end
  end
end
