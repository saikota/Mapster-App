(function(window, google, $) {

	var options = {
		center : {
			lat : 37.791350,
			lng : -122.435883
		},
		zoom : 10
	};

	var maps = new google.maps.Map($("#map-canvas")[0], options);
}(window, google, jQuery));