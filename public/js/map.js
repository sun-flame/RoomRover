mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/streets-v11', 
    center: listing.geometry.coordinates, 
    zoom: 9, 
    minZoom: 3, 
    maxZoom: 15 
});

const marker = new mapboxgl.Marker({ color: "red" }) 
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) 
            .setHTML(
                `<h4>${listing.location}</h4><p>Exact location provided after booking</p>`
            )
    )
    .addTo(map);
