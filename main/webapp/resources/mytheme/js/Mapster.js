(function(window,google){
	
	var Mapster=(function(){
		
		function Mapster(elem,options){
			this.gMap=new google.maps.Map(elem,options);
		}
		
		Mapster.prototype={
				zoom:function(level){
					if(level){
						this.gMap.setZoom(level);
					} else {
						return this.gMap.getZoom();
				    }
				},
				_on:function(event, callback){
					var self=this;
					google.maps.event.addListener(this.gMap,event,function(e){
						callback.call(self,e);
					});
				},
				addMarker:function(lat,lng,draggable){
					this.createMarker(lat,lng,draggable);
				},
				createMarker:function(lat,lng,draggable){
					var opts={
							position:{
								lat:lat,
								lng:lng
							},
							draggable:draggable,
							map:this.gMap
					}
					return new google.maps.Marker(opts);
				}
		};
		return Mapster;
	}());

	Mapster.create=function(elem,options){
		return new Mapster(elem,options);
	}
	window.Mapster=Mapster;
	
}(window,google));