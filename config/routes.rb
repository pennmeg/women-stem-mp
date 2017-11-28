Rails.application.routes.draw do
  get "/" => "mains#home"
  get "/home" => "mains#home"
  get "/country" => "mains#country"
  get "/getCountryData" => "mains#get_country_data"
end
