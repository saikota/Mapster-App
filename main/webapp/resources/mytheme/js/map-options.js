(function(window,mapster,google){
	
	
	mapster.MAP_OPTIONS = {
			center : {
				lat : 37.791350,
				lng : -122.435883
			},
			zoom : 10,
			scrollwheel:false,
			zoomControl:true,
			draggable:true,
			zoomControlOptions:{
				position:google.maps.ControlPosition.LEFT_BOTTOM,
				style:google.maps.ZoomControlStyle.SMALL
			},
			PanControlOptions :{
				position:google.maps.ControlPosition.LEFT_BOTTOM
			}
		};
})(window, window.Mapster||(window.Mapster={}),google);