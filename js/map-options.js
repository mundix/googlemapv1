(function(window,google,mapster){
    mapster.MAP_OPTIONS = {
        center: {
            lat: 19.450913,
            lng: -70.694669,
        },
        zoom: 16,
        disableDefaultUI:true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        minZoom:11,
        maxZoom:18
    }
}(window,google, window.Mapster || (window.Mapster = {}))); //Este es el namespace