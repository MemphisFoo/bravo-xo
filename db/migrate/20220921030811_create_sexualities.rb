class CreateSexualities < ActiveRecord::Migration[7.0]
  def change
    create_table :sexualities do |t|
      t.boolean :straight
      t.boolean :lesbian
      t.boolean :gay
      t.boolean :bisexual
      t.boolean :transgender_male
      t.boolean :transgender_female
      t.boolean :non_binary

      t.timestamps
    end
  end
end
