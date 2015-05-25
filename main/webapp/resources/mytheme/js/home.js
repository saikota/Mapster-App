(function(window, google, $, mapster) {

	var map= mapster.create($("#map-canvas")[0], mapster.MAP_OPTIONS);
//	map.zoom(16);
	var marker=map.addMarker({
		lat : 37.791350,
		lng : -122.435883,
		draggable : true,
		visible:true,
		content:' i like good food'
		});
	
	var marker2 = map.addMarker({
	    id: 2,
	    lat: 37.781350,
	    lng: -122.485883,
	    content: 'I like rice'
	   }); 
	
	console.log(map.removeBy(function(marker) {
	    return marker.id === 2;
	  })); 
	  
}(window, google, jQuery,window.Mapster||(window.Mapster={})));