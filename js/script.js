var map;
google.maps.event.addDomListener(window, "load", initMaps);
function initMaps(){
    var divMap = document.getElementById('map');
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(50.999602,3.326342)
    };
    map = new google.maps.Map(divMap, mapOptions);
    fetchJSONFile('https://api.myjson.com/bins/s6qct', function(data){
        map.setOptions({
            styles:data
        });
    });
}