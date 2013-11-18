class News < ActiveRecord::Base
  validates :title, :text, presence: true
end