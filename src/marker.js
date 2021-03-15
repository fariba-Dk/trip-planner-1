export const markerDomEl = document.createElement('div'); // Create a new, detached DIV
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago

export const hotelMarker = document.createElement('div'); // Create a new, detached DIV
hotelMarker.style.width = '32px';
hotelMarker.style.height = '39px';
hotelMarker.style.backgroundImage = 'url(https://i.imgur.com/D9574Cu.png)';

new mapboxgl.Marker(hotelMarker).setLngLat([-74.002, 40.69]).addTo(map); // [-87.641, 41.895] for Chicagoexp

export const restaurantMarker = document.createElement('div'); // Create a new, detached DIV
restaurantMarker.style.width = '32px';
restaurantMarker.style.height = '39px';
restaurantMarker.style.backgroundImage = 'url(https://i.imgur.com/cqR6pUI.png)';

new mapboxgl.Marker(restaurantMarker).setLngLat([-74.02, 40.69]).addTo(map); // [-87.641, 41.895] for Chicago
