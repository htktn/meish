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

ActiveRecord::Schema.define(version: 2019_10_20_014051) do

  create_table "card_informations", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "content", null: false
    t.integer "type_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "card_id", null: false
    t.index ["card_id"], name: "index_card_informations_on_card_id"
    t.index ["type_id"], name: "index_card_informations_on_type_id"
  end

  create_table "cards", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name", null: false
    t.string "role", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id", null: false
    t.integer "theme_id", null: false
    t.string "kana", null: false
    t.index ["theme_id"], name: "index_cards_on_theme_id"
    t.index ["user_id"], name: "index_cards_on_user_id"
  end

  create_table "services", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "provider", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "social_profiles", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "uid", null: false
    t.string "name"
    t.string "nickname"
    t.string "email"
    t.string "image_url"
    t.string "description"
    t.string "url"
    t.string "raw_info"
    t.string "credentials", null: false
    t.string "access_token", null: false
    t.string "access_secret", null: false
    t.integer "user_id", null: false
    t.integer "service_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["service_id"], name: "index_social_profiles_on_service_id"
    t.index ["user_id"], name: "index_social_profiles_on_user_id"
  end

  create_table "themes", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "types", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_cards", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "card_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["card_id"], name: "index_user_cards_on_card_id"
    t.index ["user_id"], name: "index_user_cards_on_user_id"
  end

  create_table "users", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "default_card_id"
    t.string "access_token"
    t.index ["default_card_id"], name: "index_users_on_default_card_id"
  end

  add_foreign_key "card_informations", "cards"
  add_foreign_key "card_informations", "types"
  add_foreign_key "cards", "themes"
  add_foreign_key "cards", "users"
  add_foreign_key "social_profiles", "services"
  add_foreign_key "social_profiles", "users"
  add_foreign_key "user_cards", "cards"
  add_foreign_key "user_cards", "users"
  add_foreign_key "users", "cards", column: "default_card_id"
end
