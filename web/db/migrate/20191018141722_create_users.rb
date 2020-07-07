class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.references :default_card_id, foreign_key: { to_table: :cards }

      t.timestamps
    end
  end
end
