class CreateTexts < ActiveRecord::Migration
  def change
    create_table :texts do |t|
      t.text :welcome
      t.text :about
      t.text :questions
    end
  end
end
