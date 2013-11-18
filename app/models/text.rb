class Text < ActiveRecord::Base
   validates :welcome , :about , :questions , presence: true
end