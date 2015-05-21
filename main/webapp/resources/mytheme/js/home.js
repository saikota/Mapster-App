(function(window, google, $, mapster) {

	var options = mapster.MAP_OPTIONS;

	var maps = new google.maps.Map($("#map-canvas")[0], options);
}(window, google, jQuery,window.Mapster||(window.Mapster={})));