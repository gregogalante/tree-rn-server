# This migration comes from matilda_core (originally 20191109091704)
class CreateMatildaCoreUserEmails < ActiveRecord::Migration[6.0]
  def change
    create_table :matilda_core_user_emails, id: false do |t|
      t.string :email, primary_key: true
      t.string :user_uuid
      t.boolean :primary
      t.boolean :confirmed
      t.timestamps
    end
  end
end
