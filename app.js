//Podemos importar de manera anonima otras librerias.
//google -> namespace
//podemos provide lo que sea , siepre debe ir window primero
(function(window,mapster){

    var options = mapster.MAP_OPTIONS;
    element = document.getElementById("map");
    // map = new google.maps.Map(element,options);
    map = Mapster.create(element,options);
    // map.zoom(18);
    // alert(map.zoom());
//Como las librerias de google estan en la de mapster library ya no tengo qeu invocarlas aqui
// }(window,google,window.Mapster || (window.Mapster = {})));
//google.maps.event.addListener()
//    Vamos a ponerlo en el mapster Library
//     google.maps.event.addListener(map.gMap,"click",function(e){
//         alert("Click");
//         console.log(e);
//     });
//     google.maps.event.addListener(map.gMap,"dragend",function(e){
//         alert("Finish Drag");
//         // console.log(e);
//     });
//    Ahora los llamaremospor el mapster
//     map._on("click",function(e){
//        console.log("click",e,this);
//     });
//     map._on("dragend",function(e){
//        console.log("done drag");
//     });
//     map._on("rightclick",function(e){
//        console.log("Cool");
//     });

}(window,window.Mapster || (window.Mapster = {})));

//Ahora veamoas los eventos de google.maps

