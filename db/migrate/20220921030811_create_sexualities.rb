class CreateSexualities < ActiveRecord::Migration[7.0]
  def change
    create_table :sexualities do |t|
      t.string :choice
      

      t.timestamps
    end
  end
end
