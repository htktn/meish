class SocialProfile < ApplicationRecord
  belongs_to :user

  def provider
    Service.find(self.service_id).provider
  end
end
