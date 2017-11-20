class CreateFactbooks < ActiveRecord::Migration[5.1]
  def change
    create_table :factbooks do |t|
      t.references :country, foreign_key: true
      t.integer :population
      t.string :pop_yr
      t.decimal :sex_ratio
      t.string :sex_ratio_yr
      t.decimal :literacy_m
      t.decimal :literacy_f
      t.string :lit_yr
      t.decimal :youth_unemploy_m
      t.decimal :youth_unemploy_f
      t.string :youth_unemploy_yr
      t.money :gdp_per_capita
      t.string :gdp_capita_yr
      t.string :source_factbook

      t.timestamps
    end
  end
end
