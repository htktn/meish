class User < ApplicationRecord
  has_many :social_profiles, dependent: :destroy
  has_many :user_cards, dependent: :destroy

  # ユーザーが持っている名刺
  has_many :cards, dependent: :destroy

  # 交換した名刺
  has_many :other_cards, through: :user_cards, source: :card
end
