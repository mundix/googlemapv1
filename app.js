(function(window,mapster){

    var options = mapster.MAP_OPTIONS;
    var element = document.getElementById("map");
    var map = Mapster.create(element,options);
    var marker = map.addMarker({
        lat:19.450913,
        lng:-70.694669,
        content: "<div style='color:red'>Me gusta la comida</div>",
        draggable:true
        // icon: ''
    });
    var marker2 = map.addMarker({
        lat:19.430912,
        lng:-70.694669,
        content: 'Me gusta!!',
        // icon: ''
    });
    // map._removeMarker(marker2);
    // console.log(map.markers);
    var found = map.findMarkerByLat(19.450913);
    console.log(found);

}(window,window.Mapster || (window.Mapster = {})));

//Ahora vamso a tratar de ir guarando los markers , esto es util para las db,
// vamos a usar un array en el Module Mapster

//Para agregar lo haremos con un array y para borrar lo harecmos
//ubicando el indice que hay que remover

//Vamos a crear una funcion que buste un Marker By Lat -> findMarkerByLat(lat)