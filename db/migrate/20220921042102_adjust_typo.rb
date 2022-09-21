class AdjustTypo < ActiveRecord::Migration[7.0]
  def change
    rename_column :messages, :paticipant_id, :participant_id
  end
end
