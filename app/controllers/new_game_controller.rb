class NewGameController < ApplicationController
  def index
  	render :partial => "add_new_game"
  end
  def execute
    begin

    @jsonData = JSON.parse(request.body.read)
    @query = @jsonData["data"]

 #    require 'yaml'

 #    @raw_config = File.read("config/database.yml")
 #    @APP_CONFIG = YAML.load(@raw_config)

 #    ActiveRecord::Base.establish_connection("development")
	# ActiveRecord::Base.connection.execute(@query)

    @result = { :success => true, :name => 'Mike', :age => 70 }.to_json

    render :json => @result

    rescue Exception => exc
       @exception_msg = exc.message
       render :json => { :success => false, :msg => @exception_msg }.to_json
    end
  end 
end
