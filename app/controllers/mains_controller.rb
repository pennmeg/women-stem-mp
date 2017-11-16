class MainsController < ApplicationController
    def home
      puts "*** home ***"
    end
    def country
      puts "*** country ***"
      puts "GOOGLE_JS_KEY: #{GOOGLE_JS_KEY}"
    end
end
