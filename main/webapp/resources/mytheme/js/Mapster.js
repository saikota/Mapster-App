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
				_on:function(opts){
					var self=this;
					google.maps.event.addListener(opts.obj,opts.event,function(e){
						opts.callback.call(self,e);
					});
				},
				addMarker:function(opts){
					var marker;
					opts.position = {
							lat : opts.lat,
							lng : opts.lng
					}
					marker = this.createMarker(opts);

					if(opts.event){
						this._on({
							obj:marker,
							event:opts.event.name,
							callback:opts.event.callback
						});

					}
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