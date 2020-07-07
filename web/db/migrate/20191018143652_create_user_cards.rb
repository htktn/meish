class CreateUserCards < ActiveRecord::Migration[5.0]
  def change
    create_table :user_cards do |t|
      t.references :card, foreign_key: true, null: false
      t.references :user, foreign_key: true, null: false

      t.timestamps
    end
  end
end
