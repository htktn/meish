class Theme < ApplicationRecord
  def theme
    Theme.find(self.theme_id)
  end
end
