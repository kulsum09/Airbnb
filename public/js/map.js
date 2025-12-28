//    mapboxgl.accessToken = mapToken;
//     const map = new mapboxgl.Map({
//         container: 'map', // container ID
//         style: 'mapbox://styles/mapbox/streets-v12',
//         center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
//         zoom: 9 // starting zoom
//     });

//      const marker = new mapboxgl.Marker()
//        .setLngLat(coordinates) //listing.geometry.coordinates
//         .addTo(map);

mapboxgl.accessToken = mapToken;

if (
  listing &&
  listing.geometry &&
  listing.geometry.coordinates &&
  listing.geometry.coordinates.length === 2
) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: listing.geometry.coordinates,
    zoom: 9
  });

  new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h4>${listing.location}</h4><p>Welcome to Wanderlust!</p>`)
    )
    .addTo(map);

} else {
  console.error("Invalid or missing coordinates:", listing.geometry.coordinates);
}
