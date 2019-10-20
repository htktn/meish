class AddKanaToCard < ActiveRecord::Migration[5.0]
  def change
    add_column :cards, :kana, :string, null: false
  end
end
