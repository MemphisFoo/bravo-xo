class CreateGrades < ActiveRecord::Migration[7.0]
  def change
    create_table :grades do |t|
      t.integer :user_id_given
      t.integer :user_id_received
      t.integer :grade

      t.timestamps
    end
  end
end
