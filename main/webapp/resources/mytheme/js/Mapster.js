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
				addMarker:function(opts){
				 opts.position = {
						lat : opts.lat,
						lng : opts.lng
					}
					this.createMarker(opts);
				},
				createMarker:function(opts){
					 opts.map=this.gMap;
					 console.log(opts);
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