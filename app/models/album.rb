class Album < ActiveRecord::Base
   validates :title, presence: true
   has_many :images
   validates :title, length: { maximum: 25 }
end