# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Country.create ([ { name: "Brazil", country_code: "BR" }, { name: "China", country_code: "CN" },
  { name: "Costa Rica", country_code: "CR" }, { name: "Egypt", country_code: "EG" }, { name: "Germany", country_code: "DE" },
  { name: "Greece", country_code: "GR" }, { name: "India", country_code: "IN" }, { name: "Italy", country_code: "IT" },
  { name: "Japan", country_code: "JP" }, { name: "Luxembourg", country_code: "LU" },
  { name: "Myanmar", country_code: "MM" }, { name: "Netherlands", country_code: "NL" }, { name: "Nigeria", country_code: "NG" },
  { name: "Saudi Arabia", country_code: "SA" }, { name: "United States of America", country_code: "US" } ])

Factbook.create ([ { country_id: 1, population: 207353391, pop_yr: "July 2017", sex_ratio: 0.97,
  sex_ratio_yr: "2016", literacy_m: 92.2, literacy_f: 92.9, lit_yr: "2015", youth_unemploy_m: 13.8, youth_unemploy_f: 21.2, youth_unemploy_yr: "2014",
  gdp_per_capita: 15200, gdp_capita_yr: "2016", source_factbook: "CIA World Factbook"}] )
