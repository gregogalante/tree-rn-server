# This migration comes from matilda_core (originally 20191121073655)
class CreateMatildaCoreUserSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :matilda_core_user_sessions, id: false do |t|
      t.string :uuid, primary_key: true
      t.string :user_uuid
      t.datetime :closed_at
      t.string :ip_address
      t.timestamps
    end
  end
end
