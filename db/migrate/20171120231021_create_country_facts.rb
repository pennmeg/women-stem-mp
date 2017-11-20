class CreateCountryFacts < ActiveRecord::Migration[5.1]
  def change
    create_table :country_facts do |t|
      t.references :country, foreign_key: true
      t.text :fact_1
      t.text :source_1
      t.text :fact_2
      t.text :source_2
      t.text :fact_3
      t.text :source_3
      t.text :fact_4
      t.text :source_4
      t.text :fact_5
      t.text :source_5
      t.text :fact_6
      t.text :source_6

      t.timestamps
    end
  end
end
