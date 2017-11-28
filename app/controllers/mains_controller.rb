class MainsController < ApplicationController
    def home
      puts "*** home ***"
    end
    def country
      puts "*** country ***"
    end
    def get_country_data
      puts "*** get_country_data ***"
      # country codes are equal
      @country = Country.where(:country_code => params[:countryCode])
      puts "@country: #{@country.inspect}"
      # @country_json = @country.as_json
      # puts "@country_json: #{@country_json.inspect}"
      # @country_parsed = @country_json
      # country data = factbook.find(countryid) or country.Factbook
      respond_to do |format|
          format.json { render :json => @country }
      end
    end
end
