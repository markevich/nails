class Price < ActiveRecord::Base
  validates :title, :price, presence: true
  validates :price, numericality: { only_integer: true , greater_than_or_equal_to: 0 }
end