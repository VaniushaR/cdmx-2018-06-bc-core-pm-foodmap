//function for GOOGLE MAPS API KEY
// const Map4Lovers = () => {
//   let mapProperties = {
//     center: new google.maps.LatLng(51.508742, -0.12085),
//     zoom: 8
//   };
//   let map = new google.maps.Map(document.getElementById('map'), mapProperties);
// };
//API GOOGLE MAPS GEOLOCALIZATION
// class findUserLoc {
//   constructor(callback) {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(position => {
//         this.latitude = position.coords.latitude;
//         this.longitude = position.coords.longitude;
//         //callback
//         callback();
//       });
//     } else {
//       alert('tu navegador no soporta geolocalización');
//     }
//   }
// }
// var userLocation = new findUserLoc();
// console.log(userLocation);
alert('conectado el data.js');
//
//MAP BOX
mapboxgl.accessToken =
  'pk.eyJ1IjoidmFuaXVzaGEiLCJhIjoiY2praXVwamlsMDBxbjNxcGp6ZmhhYzNxayJ9.p3_qpu0SpUbx200bOHPMEA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10'
});
