const postItinerary = (newObject) => {
    return fetch("http://localhost:8088/itinerary", {
            method: "POST",
            body: JSON.stringify(newObject),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
}

const getAllItineraries = () => {
    return fetch("http://localhost:8088/itinerary")
        .then(r => r.json())
        .then(parsedResults => {
            parsedResults.forEach(item => {

            });
        })
}