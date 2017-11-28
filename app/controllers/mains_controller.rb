class MainsController < ApplicationController
    def home
      puts "*** home ***"
    end
    def country
      puts "*** country ***"
      @countries = Country.all
    end
    def get_country_data
      puts "*** get_country_data ***"
      # country codes are equal
      @countries = Country.where(:country_code => params[:countryCode])
      puts "@countries: #{@countries.inspect}"
      # country data = factbook.find(countryid) or country.Factbook
      respond_to do |format|
          format.html { render :country }
      end
    end
end
