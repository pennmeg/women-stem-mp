# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171202173217) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "countries", force: :cascade do |t|
    t.string "name"
    t.string "country_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "country_facts", force: :cascade do |t|
    t.bigint "country_id"
    t.text "fact_1"
    t.text "source_1"
    t.text "fact_2"
    t.text "source_2"
    t.text "fact_3"
    t.text "source_3"
    t.text "fact_4"
    t.text "source_4"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["country_id"], name: "index_country_facts_on_country_id"
  end

  create_table "factbooks", force: :cascade do |t|
    t.bigint "country_id"
    t.integer "population"
    t.string "pop_yr"
    t.decimal "sex_ratio"
    t.string "sex_ratio_yr"
    t.decimal "literacy_m"
    t.decimal "literacy_f"
    t.string "lit_yr"
    t.decimal "youth_unemploy_m"
    t.decimal "youth_unemploy_f"
    t.string "youth_unemploy_yr"
    t.money "gdp_per_capita", scale: 2
    t.string "gdp_capita_yr"
    t.string "source_factbook"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["country_id"], name: "index_factbooks_on_country_id"
  end

  create_table "photos", force: :cascade do |t|
    t.string "title"
    t.string "source"
    t.string "content_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
  end

  add_foreign_key "country_facts", "countries"
  add_foreign_key "factbooks", "countries"
end
