# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_11_122630) do

  create_table "cards", force: :cascade do |t|
    t.string "name"
    t.string "game"
    t.string "user_uuid"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "matilda_core_groups", primary_key: "uuid", id: :string, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "matilda_core_memberships", force: :cascade do |t|
    t.string "group_uuid"
    t.string "user_uuid"
    t.text "permissions"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "matilda_core_user_emails", primary_key: "email", id: :string, force: :cascade do |t|
    t.string "user_uuid"
    t.boolean "primary"
    t.boolean "confirmed"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "matilda_core_user_sessions", primary_key: "uuid", id: :string, force: :cascade do |t|
    t.string "user_uuid"
    t.datetime "closed_at"
    t.string "ip_address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "matilda_core_users", primary_key: "uuid", id: :string, force: :cascade do |t|
    t.string "username", null: false
    t.string "name"
    t.string "surname"
    t.string "password"
    t.string "privacy"
    t.string "recover_password_code"
    t.datetime "recover_password_code_time"
    t.string "portfolio_code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
