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
    var found = map.findMarkerByLat(19.450913);
    console.log(found);

}(window,window.Mapster || (window.Mapster = {})));

//Vamos a crear un Mudule, que pueda manejar cualquier tipo de objeto
//Crearemo un file "List.js"
