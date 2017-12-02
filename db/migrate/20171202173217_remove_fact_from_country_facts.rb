class RemoveFactFromCountryFacts < ActiveRecord::Migration[5.1]
  def change
    remove_column :country_facts, :fact_5, :text
    remove_column :country_facts, :source_5, :text
    remove_column :country_facts, :fact_6, :text
    remove_column :country_facts, :source_6, :text
  end
end
