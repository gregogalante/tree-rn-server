class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :game
      t.string :user_uuid
      t.text :description
      t.timestamps
    end
  end
end
