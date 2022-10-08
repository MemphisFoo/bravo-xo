class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :first_name
      t.string :last_name
      t.text :bio
      t.belongs_to :show, null: false, foreign_key: true
      t.belongs_to :pronoun, null: false, foreign_key: true
      t.belongs_to :sexuality, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
