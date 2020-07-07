class AddThemeId < ActiveRecord::Migration[5.0]
  def change
    add_reference :cards, :theme, foreign_key: true, null: false
  end
end
