$(document).ready(function() {
  var map = L.map('map');

  map.setView([40.2838, -3.8215], 13);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  //Marker
  L.marker([40.2838, -3.8215]).addTo(map)
    .bindPopup('ETSIT URJC')
    .openPopup();

  function onMapClick(e) {
    L.popup()
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map)
  }

  //Location
  function onLocationFound(e) {
    var radius = e.accuracy / 2;
    L.circle(e.latlng, radius).addTo(map);
  }

  function onLocationError(e) {
    alert(e.message);
  }

  map.on('locationfound', onLocationFound);
  map.on('locationerror', onLocationError);
  map.on('click', onMapClick);
  map.locate({setView: true, maxZoom: 18})
});
