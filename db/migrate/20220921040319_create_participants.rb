class CreateParticipants < ActiveRecord::Migration[7.0]
  def change
    create_table :participants do |t|
      t.integer :conversation_id
      t.integer :user_id
      t.timestamp :time_joined
      t.timestamp :time_left

      t.timestamps
    end
  end
end
