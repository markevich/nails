class Album < ActiveRecord::Base
   validates :title, presence: true
   has_many :images, dependent: :destroy
   validates :title, length: { maximum: 25 }
end