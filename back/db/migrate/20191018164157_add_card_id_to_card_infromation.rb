class AddCardIdToCardInfromation < ActiveRecord::Migration[5.0]
  def change
    add_reference :card_informations, :card, foreign_key: true, null: false
  end
end
