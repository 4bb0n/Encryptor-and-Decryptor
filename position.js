window.onload = init;

function init(){
    navigator.geolocation.getCurrentPosition(showGeoPosition);
}

function showGeoPosition(data){
    console.log(data)
}