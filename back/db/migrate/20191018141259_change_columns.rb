class ChangeColumns < ActiveRecord::Migration[5.0]
  def change
    change_column :cards, :name, :string, null: false
    change_column :cards, :role, :string, null: false
  end
end
