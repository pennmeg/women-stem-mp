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
      @country = Country.where(:country_code => params[:countryCode]).first
      puts "@country: #{@country.inspect}"
      puts "@country id: #{@country[:id].inspect}"
      @factbook = Factbook.where(:country_id => @country[:id])
      puts "@factbook: #{@factbook.inspect}"
      @allData = { country: @country, facts: @factbook }
      # @country_json = @country.as_json
      # puts "@country_json: #{@country_json.inspect}"
      # @country_parsed = @country_json
      # country data = factbook.find(countryid) or country.Factbook
      respond_to do |format|
          format.json { render :json => @allData }
      end
    end
end
