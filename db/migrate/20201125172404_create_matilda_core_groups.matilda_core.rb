# This migration comes from matilda_core (originally 20191109091641)
class CreateMatildaCoreGroups < ActiveRecord::Migration[6.0]
  def change
    create_table :matilda_core_groups, id: false do |t|
      t.string :uuid, primary_key: true
      t.string :name
      t.timestamps
    end
  end
end
