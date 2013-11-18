class Image < ActiveRecord::Base
  validates :title , :path , :album, presence: true
  belongs_to :album
  mount_uploader :path, ImageUploader
end