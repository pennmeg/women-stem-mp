#Women in STEM 

Model United Nations (UN) is typically a very academic after-school activity, and can be one that is difficult to get students excited about if they are new. A reason for this, is the large amount of research that is required for preparation for a simulation where students pretend to be diplomats in the UN and discuss problems and solutions to international issues. In my final project I wanted to make a web application to make the learning and prep. process more interactive and exciting for students - especially for those who have never participated in a simulation and are not aware of what is to come. This project was the final project for NYCDA's Web Development Immersive Bootcamp.

##Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Prerequisites

There is seed data in this project that is required for the mapping funtions found in the country profile section of the web application.
After downloading the project, please complete a gem install:
```
bundle install
```
Then a database creation and migration:
```
rake db:create
rake db:migrate
```
And be sure to download the seed data:
``` 
rake db:seed
```
Then you can run the rails server in your terminal and open in your webbrowser through local host:
```
rails s
```

##Deployment URL

* COMING SOON!

##Built With

* [Rails] - Web Framework Used
* CSS and Javascript/jQuery - Styling and Functionality
* j Vector Map [http://jvectormap.com/] - Country Map
* PSQL - Database

##Author

* Megan Penn - https://github.com/pennmeg
