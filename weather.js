// https://developer.forecast.io/docs/v2

var FORECAST_API_KEY = "0d961c0361d583c2cc388603c22ae5ac";

$(document).ready(function(){

	// Your code here

	$('#weather-form').submit(function(event){
		event.preventDefault();
		

		var latitude = $('#locationLatitude').val();

		var longitude = $('#locationLongitude').val();

		var url = "https://api.forecast.io/forecast/" + FORECAST_API_KEY + "/" + latitude + "," + longitude;

		$.ajax({
			url: url,
			type: "GET",
			dataType: 'jsonp'
		}).done(function(response){
			console.log(response);
			$('#weather-current').html(response.currently.summary);
		});
	});


	
});