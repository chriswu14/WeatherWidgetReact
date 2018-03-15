const service = new window.google.maps.places.PlacesService(document.createElement('div'));

export function getPicture(city, callback) {
    service.textSearch({ query: city, width: 800 }, callback);
}
