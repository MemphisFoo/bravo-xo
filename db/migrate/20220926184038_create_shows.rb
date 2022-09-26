class CreateShows < ActiveRecord::Migration[7.0]
  def change
    create_table :shows do |t|
      t.text :title

      t.timestamps
    end
  end
end
