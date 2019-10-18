class AddDefaultCardId < ActiveRecord::Migration[5.0]
  def change
    rename_column :users, :default_card_id_id, :default_card_id
  end
end
