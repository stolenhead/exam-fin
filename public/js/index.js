var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('mapa'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}



//   if (navigator.geolocation) { 
//     // también se puede usar if ("geolocation" in navigator) {}
//     navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
//   }
// };

// var funcionExito = function(posicion) {
//   var lat = posicion.coords.latitude;
//     var lon = posicion.coords.longitude;
//     var dir = "";
//       var latlng = new google.maps.LatLng(lat, lon);
//       geocoder = new google.maps.Geocoder();
//       geocoder.geocode({"latLng": latlng}, function(results, status)
//       {
//         if (status == google.maps.GeocoderStatus.OK)
//         {
//         if (results[0])
//         {
//         dir =  results[0].formatted_address ;
//         }
//         else
//         {
//         dir = "No se ha podido obtener ninguna dirección en esas coordenadas.";
//         }
//         }
//         else
//         {
//         dir = "El Servicio de Codificación Geográfica ha fallado con el siguiente error: " + status ;
//         }

//         $("#direccion").val(dir) ;
//       });
//    var map= new GMaps({
//   div: '#mapa',
//   lat: lat,
//   lng: lon
// });
//   map.addMarker({
//   lat:lat ,
//   lng: lon,
//   title: 'Lima',
//   click: function(e) {
//     alert('You clicked in this marker');
//   }
//   })
// };

// var funcionError = function (error) {
//   console.log(error);
// };



