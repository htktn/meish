class CardInformation < ApplicationRecord
  belongs_to :card

  def type
    Type.find(self.type_id).name
  end
end
