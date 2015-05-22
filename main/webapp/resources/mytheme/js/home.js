(function(window, google, $, mapster) {

	var maps= mapster.create($("#map-canvas")[0], mapster.MAP_OPTIONS);
	maps.zoom(16);
	maps._on('click',function(e){
		console.log("you have clicked on this Map",this);
		
	});
	maps._on('dragend',function(){

		console.log(" you are done dragging", this);
	})
	maps.addMarker(37.791350, -122.435883, true);
}(window, google, jQuery,window.Mapster||(window.Mapster={})));