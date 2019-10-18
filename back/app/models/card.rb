class Card < ApplicationRecord
  has_many :card_informations, dependent: :destroy
  has_many :user_cards, dependent: :destroy
  belongs_to :user

  def theme
    Theme.find(self.theme_id)
  end
end
