(function(window,mapster){

    var options = mapster.MAP_OPTIONS;
    element = document.getElementById("map");
    map = Mapster.create(element,options);
    // map.addMarker(19.450913,-70.694669,true);
//        Vamos a trabajr con los eventos del marker
//    Vamos a hacero mas user friendly, que sepamos que estamos pasando a la funcion
    map.addMarker({
        lat:19.450913,
        lng:-70.694669,
        draggable:true,
    //    Crearemos un event obj
        event: {
            name: 'dragend',
            callback: function(){
                console.log("dragend");
            }
        }

    });
//    Ahora que tenemos los custom options, vamos a pasar los custom events



}(window,window.Mapster || (window.Mapster = {})));