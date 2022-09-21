class CreateConversations < ActiveRecord::Migration[7.0]
  def change
    create_table :conversations do |t|
      t.integer :user_id
      t.timestamp :time_started
      t.timestamp :time_closed

      t.timestamps
    end
  end
end
