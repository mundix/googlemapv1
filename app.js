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
        id: 2,
        lat:19.430912,
        lng:-70.694669,
        content: 'Me gusta!!',
        // icon: ''
    });
    // var found = map.findMarkerByLat(19.450913);
    // var found = map.findBy(
    //     function(marker){
    //         return marker.id  === 2;
    //     }
    // );
    // console.log(found);
    map.removeBy(function(marker){
       return marker.id === 2;
    });

    // var randomArr = [1,2,3];
    // randomArr.forEach(function(item){
    //     alert(item);
    // });

    // console.log(found);
    // console.log(map.markers);
}(window,window.Mapster || (window.Mapster = {})));

//Vamos a crear un Mudule, que pueda manejar cualquier tipo de objeto
//Crearemo un file "List.js"
