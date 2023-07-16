export async function initMap() {
    
//   service.nearbySearch(request, callback);
}

export function getTopZoos(callbackFunction){
    const sydney = new window.google.maps.LatLng(-33.867, 151.195);
    const service = new window.google.maps.places.PlacesService(document.createElement('div'));
        
    var request = {
        location: sydney,
        radius: '100000',
        query: 'zoos in sydney',
        type: 'zoo'
    };
    
    service.textSearch(request, callbackFunction);
}

export function parsePlaceResults(results) {
    const formattedResults = results.map((place) => {
        return ({
            id: place.place_id,
            formattedAddress: place.formatted_address,
            name: place.name,
            photo: Array.isArray(place.photos) ? place.photos.length > 0 ?
                place.photos[0].getUrl({maxHeight: 250}) : "" : "",
            rating: place.rating,
            types: place.types,
            status: place.opening_hours? place.opening_hours.isOpen? 
                "Open Now" : "Closed" : "N/A",
            userRatingsTotal: place.user_ratings_total,
        })
    })
    return formattedResults;
}

