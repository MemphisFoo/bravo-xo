class CreateChoosePronouns < ActiveRecord::Migration[7.0]
  def change
    create_table :choose_pronouns do |t|
      t.string :pick

      t.timestamps
    end
  end
end
