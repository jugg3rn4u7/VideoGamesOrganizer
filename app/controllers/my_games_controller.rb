class MyGamesController < ApplicationController
  def index
  	render :partial => "my_games_list"
  end
  def execute
    begin

    @jsonData = JSON.parse(request.body.read)
    @query = "select * from my_collection"

    require 'yaml'

    @raw_config = File.read("config/database.yml")
    @APP_CONFIG = YAML.load(@raw_config)

    ActiveRecord::Base.establish_connection("development")

    @result = ActiveRecord::Base.connection.execute(@query)

    @meta = @result.fields

    render :partial => "query_results/output_query"

    rescue Exception => exc
       @exception_msg = exc.message
       render :partial => "query_results/error"
    end
  end 
end
