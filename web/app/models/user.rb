class User < ApplicationRecord
  devise :database_authenticatable, :timeoutable, :omniauthable, omniauth_providers: [:twitter]
  
  has_many :social_profiles, dependent: :destroy
  has_many :user_cards, dependent: :destroy

  # ユーザーが持っている名刺
  has_many :cards, dependent: :destroy

  # 交換した名刺
  has_many :other_cards, through: :user_cards, source: :card

  after_create :update_access_token!

  def update_access_token!
    self.access_token = "#{self.id}:#{Devise.friendly_token}"
    save
  end
end
