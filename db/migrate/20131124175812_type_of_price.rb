class TypeOfPrice < ActiveRecord::Migration
  def change
  	change_column :prices, :price ,:string
  end
end
