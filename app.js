(function(window,mapster){

    var options = mapster.MAP_OPTIONS;
    element = document.getElementById("map");
    map = Mapster.create(element,options);
    // map.addMarker(19.450913,-70.694669);
    map.addMarker(19.450913,-70.694669,true); //Hacerlo draggable
    // var marker = new google.maps.Marker({
    //     position: {
    //         lat: 19.450913,
    //         lng: -70.694669,
    //     },
    //     map: map.gMap,
    //     icon: ''//icon url: mapicons.nicolasmoilet.com
    // });




}(window,window.Mapster || (window.Mapster = {})));