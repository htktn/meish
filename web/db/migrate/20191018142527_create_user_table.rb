class CreateUserTable < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.references :default_card, foreign_key: { to_table: :cards }, null: false

      t.timestamps
    end
  end
end
