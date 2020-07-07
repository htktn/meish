class Type < ApplicationRecord
  validates :name, uniqueness: true
end
