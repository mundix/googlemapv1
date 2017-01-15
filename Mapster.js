//Todo esto es un Module  como en ruby
(function(window,google){
    var Mapster = (function(){
        function Mapster(element,opts){
            this.gMap = new google.maps.Map(element,opts);
        }
        Mapster.prototype = {
            zoom:function(level)
            {
                if(level)
                {
                    this.gMap.setZoom(level);
                }else{
                    return this.gMap.getZoom();
                }
            },
            // _on:function(event,callback){
            _on:function(opts){
                var self = this;
                google.maps.event.addListener(opts.obj,opts.event,function(e){
                    opts.callback.call(self,e);
                });
            },
            // addMarker: function(lat,lng,draggable){
            //Cambiarmos los artucmos por opts options, una especie de array por direcicones
            addMarker: function(opts){
              // this._createMarker(lat,lng,draggable);
                //Devolveremos el marker en esta variable
                var marker;
                opts.position = {
                    lat: opts.lat,
                    lng: opts.lng,
                };

                marker = this._createMarker(opts);
                //Si existe un evento lo ejecuta
                //Recuerda este evento espara el marker ONLY
                if(opts.event)
                {
                    // console.log(opts.event);
                    this._on({
                        obj:        marker,
                        event:      opts.event.name,
                        callback:   opts.event.callback
                    });
                }
              //  como no tenemos el marker obj
              // this._createMarker(opts);Subimos esta funcionoa
            },
            // _createMarker: function(lat,lng,draggable){
            _createMarker: function(opts){
                opts.map = this.gMap;
                // var opts = {
                //     position: {
                //         lat: lat,
                //         lng: lng
                //     },
                //     map: this.gMap,
                //     draggable:draggable
                // }
                return new google.maps.Marker(opts);
            }
        };
        return Mapster;
    }());

    Mapster.create = function(element,opts){
        return new Mapster(element,opts);
    }
    window.Mapster = Mapster;
}(window,google));