/**
 * 
 */
(function(window){
	
	var List = (function(){
		
		function List(){
			this.items=[];
		};
		
		List.prototype={
				add:function(item){
					this.items.push(item);
				},
				remove:function(item){
				  var indexOf=this.items.indexOf(item);
				  if(indexOf!==-1){
					  this.items.splice(indexOf,1);
					//  item.setMap(null);
				  }
				},
				find:function(callback,action){
					var matches=[],callbackReturn;
					var i=0,length=this.items.length;
					for(;i<length;i++){
						callbackReturn=callback(this.items[i],i);
						if(callbackReturn){
							matches.push(this.items[i]);
						}
					}
					
					if(action){
						action.call(this,matches)
					}
					return matches;
				}
		};
		
		return List;
	})();
	
	List.create=function(){
		return new List();
	};
	
	window.List=List;
}(window));