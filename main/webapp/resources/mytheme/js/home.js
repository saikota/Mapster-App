(function(window, google, $, mapster) {

	var maps= mapster.create($("#map-canvas")[0], mapster.MAP_OPTIONS);
	maps.zoom(16);

	maps.addMarker({
		lat : 37.791350,
		lng : -122.435883,
		draggable : true,
		visible:true,
		event:{
			name:'dragend',
			callback:function(){
				alert(' i am dragged just now');
			}
		}
		});
}(window, google, jQuery,window.Mapster||(window.Mapster={})));