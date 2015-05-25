(function(window, google, $, mapster) {

	var maps= mapster.create($("#map-canvas")[0], mapster.MAP_OPTIONS);
	maps.zoom(16);
	var marker=maps.addMarker({
		lat : 37.791350,
		lng : -122.435883,
		draggable : true,
		visible:true,
		content:' i like good food',
//		event:{
//			name:'click'
////			callback:function(){
////				alert(' i am dragged just now');
////			}
//		}
		});
	maps._removeMarker(marker);
	
}(window, google, jQuery,window.Mapster||(window.Mapster={})));