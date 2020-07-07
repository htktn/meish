class RemoveDefaultCardIdFromUser < ActiveRecord::Migration[5.0]
  def change
    remove_reference :users, :default_card, foreign_key: { to_table: :cards }, null: false
  end
end
