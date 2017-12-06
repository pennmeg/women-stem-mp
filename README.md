# Women in STEM 

Model United Nations (UN) is typically a very academic after-school activity, and it can be difficult to get students excited about its challenges -- especially if they are new.  One reason for this is the large amount of research required to prepare for a simulation.  Students take on the complex role of diplomats in the UN.  They discuss problems and solutions to international issues, for which they need a broad background of facts and techniques. 

For my final project, I wanted to make a web application that makes learning and preparation more interactive and exciting for students -- especially for those who have never participated in a simulation and are not aware of what is to come.  This project was the final project for NYCDA's Web Development Immersive Bootcamp.

## Getting Started

These instructions will get a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Prerequisites

After downloading the project, please install its required gem collection:
```
bundle install
```
Then create the database and run migration files to generate its data tables:
```
rake db:create
rake db:migrate
```
The project uses seed data in its database, which is required for the mapping funtions found in the country profile section of the web application. Be sure to install the seed data with this command:
``` 
rake db:seed
```
You can run the rails server in your terminal... :
```
rails s
```
...and open the project in your webbrowser by typing its localhost url into the address bar
```
localhost:3000
```
## Deployment URL: https://women-stem-mp.herokuapp.com

## Built With

* Ruby on Rails - Backend web framework
* CSS and Javascript/jQuery - Styling and Functionality
* j Vector Map [http://jvectormap.com/] - Country Map
* Postgresql - Database

## Section Functionality

One of the highlights of this project is the interactive world map (Section: Country Map), where users can click on highlighted a country to find out facts, statistics, and policies.

The map was built using j Vector Map, and then styling was altered to fit site feel and responsiveness. When you click on a country it recognizes the country from code in the j Vector Map library, and matches it to countries being housed in an array (highlighted countries). That begins an ajax call which matches the selected country with those being held in the primary database, and then pulls data from the other two databases using foreign keys. If successful, the information is displayed on the webpage.

Controller code building the selected country object
```
    def get_country_data
      puts "*** get_country_data ***"
      # country codes are equal
      @country = Country.where(:country_code => params[:countryCode]).first
      puts "@country: #{@country.inspect}"
      puts "@country id: #{@country[:id].inspect}"
      @factbook = Factbook.where(:country_id => @country[:id])
      puts "@factbook: #{@factbook.inspect}"
      @countryfact = CountryFact.where(:country_id => @country[:id])
      puts "@countryfact: #{@countryfact.inspect}"
      @allData = { country: @country, facts: @factbook, policy: @countryfact }
      respond_to do |format|
          format.json { render :json => @allData }
      end
    end
```

## Author

* Megan Penn - https://github.com/pennmeg

## Acknowledgements

Thank you to Kristen Cheriegate for helping me complete the country research necessary for the interactive world map and country facts!
