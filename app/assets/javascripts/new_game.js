// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {

	var BASE_URL = "";

	$( document ).on( "click", "#add-game", function(e) {

		var data = retrieve_values();
		var postData = { data: JSON.stringify(data) };

		$.ajax({
  	
		  	url: BASE_URL + "new_game/execute?_ts=" + (new Date()).getTime(),
		  	type: 'POST',
		  	data: JSON.stringify(postData),
		  	success: function(data) {
			    console.log("success");
			    try 
			    {
			    	var jsonData = eval(data);

				    if(jsonData["success"]) {

				    	var status = "";
				    	var keys = Object.keys(jsonData);

				    	$.each(keys, function(item) {
				    		status += keys[item] + " : " + jsonData[keys[item]] + "\n";
				    	});

				    	$("#status-log").html(status);

				    } else 
				    {
				    	$("#status-log").html(jsonData["msg"]);
				    }	    

			    } catch(e) {
			    	console.log(e.message);
			    }   
			},
			error: function(error) {
			    console.log("error: ", error);
			}

		});  
	  
	});

	var retrieve_values = function () {
		return { name: 'shrikant', place: 'Arlington' };
	}

	  
});