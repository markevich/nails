class Album < ActiveRecord::Base
   validates :title, presence: true
   has_many :images
end