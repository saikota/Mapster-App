(function(window, google, $, mapster) {

	var maps= mapster.create($("#map-canvas")[0], mapster.MAP_OPTIONS);
	maps.zoom(16);
}(window, google, jQuery,window.Mapster||(window.Mapster={})));