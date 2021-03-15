import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZmFyaWJhLWRrIiwiYSI6ImNra2Vpa29zZTAwODAyb3Jwc2ZkMjM5OHEifQ.bNMDj3Z_GhZX5ATYJCvnfg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});


//main marker
export const markerDomEl = document.createElement('div'); // Create a new, detached DIV
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago



//hotel
export const hotelMarker = document.createElement('div'); // Create a new, detached DIV
hotelMarker.style.width = '32px';
hotelMarker.style.height = '39px';
hotelMarker.style.backgroundImage = 'url(https://i.imgur.com/D9574Cu.png)';

new mapboxgl.Marker(hotelMarker).setLngLat([-74.002, 40.69]).addTo(map); // [-87.641, 41.895] for Chicagoexp



//resturant
export const restaurantMarker = document.createElement('div'); // Create a new, detached DIV
restaurantMarker.style.width = '32px';
restaurantMarker.style.height = '39px';
restaurantMarker.style.backgroundImage = 'url(https://i.imgur.com/cqR6pUI.png)';

new mapboxgl.Marker(restaurantMarker).setLngLat([-74.02, 40.69]).addTo(map); // [-87.641, 41.895] for Chicago
