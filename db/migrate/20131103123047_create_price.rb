class CreatePrice < ActiveRecord::Migration
  def change
    create_table :prices do |t|
      t.string :title
      t.integer :price
    end
  end
end
