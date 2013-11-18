class CreateImage < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :title
      t.string :path
      t.integer :album_id
    end
  end
end
