class CreateCardInformaitons < ActiveRecord::Migration[5.0]
  def change
    create_table :card_informaitons do |t|
      t.string :content, null: false
      t.references :type, foreign_key: true, null: false

      t.timestamps
    end
  end
end
