class Album < ActiveRecord::Base
   validates :title, presence: true
   has_many :images, dependend: :destroy
   validates :title, length: { maximum: 25 }
end