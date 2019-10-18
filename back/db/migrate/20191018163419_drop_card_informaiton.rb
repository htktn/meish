class DropCardInformaiton < ActiveRecord::Migration[5.0]
  def change
    drop_table :card_informaitons
  end
end
