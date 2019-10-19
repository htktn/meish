class Service < ApplicationRecord
  validates :provider, uniqueness: true
end
