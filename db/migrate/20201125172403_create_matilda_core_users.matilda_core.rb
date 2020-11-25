# This migration comes from matilda_core (originally 20191109091632)
class CreateMatildaCoreUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :matilda_core_users, id: false do |t|
      t.string :uuid, primary_key: true
      t.string :username, unique: true, null: false
      t.string :name
      t.string :surname
      t.string :password
      t.string :privacy
      t.string :recover_password_code
      t.datetime :recover_password_code_time
      t.timestamps
    end
  end
end
