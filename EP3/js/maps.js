function initMap() {
    const location = { lat: 59.911491, lng: 10.757933 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
