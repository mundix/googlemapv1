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
    // map.removeBy(function(marker){
    //    return marker.id === 2;
    // });

    for(var i=3;i<200;i++)
    {
        map.addMarker({
            id: 2,
            lat:19.430912+Math.random()/60,
            lng:-70.694669+Math.random()/50,
            content: 'Me gusta!!',
            // icon: ''
        });
    }

}(window,window.Mapster || (window.Mapster = {})));

//Ahora vamos a crear clusters, para cuando los markers se ven muy pegados,
//Es una manera facil de saber cuantos markers hay
//Este libreria no viene por default, necesita incluirla
//google-maps-utility-library-v3, lo descargaos y lo importamos al proyecto
//debajo de el google map api script,
// ahora hagamos la funcion clusters en Mapster
