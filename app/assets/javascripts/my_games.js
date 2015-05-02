// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {

	var BASE_URL = "";

	$( document ).on( "click", "#filter", function(e) {

		var query = "params";
		var postData = { query: query };

		$.ajax({
  	
		  	url: BASE_URL + "my_games/execute?_ts=" + (new Date()).getTime(),
		  	type: 'POST',
		  	data: JSON.stringify(postData),
		  	success: function(data) {
			    console.log("success");
			    $("#query-result").html(data);
			},
			error: function(error) {
			    console.log("error: ", error);
			}

		});  
	  
	});

	  
});

