(function(window,mapster){

    var options = mapster.MAP_OPTIONS;
    element = document.getElementById("map");
    map = Mapster.create(element,options);
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



}(window,window.Mapster || (window.Mapster = {})));

//Ahora vamos a trabajr los infowindows , cuando se hace click en el marker