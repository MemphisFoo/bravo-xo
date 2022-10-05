class CreateImageTables < ActiveRecord::Migration[7.0]
  def change
    create_table :image_tables do |t|

      t.timestamps
    end
  end
end
