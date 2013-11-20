class Price < ActiveRecord::Base
  validates :title, :price, presence: true
end