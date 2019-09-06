
// let sports = "110"
// getEvents(sports)


let parks = [];

const getParks = (value) => {
    fetch('https://data.nashville.gov/resource/74d7-b74t.json$$app_token=PBNHauq9FYSAXZ8QQhUL9C1rh')
    .then(parksData => parksData.json())
    .then(parksData => parksData.parks)
    .then(parsedParks => {
        parks.push(parsedParks)
        console.log("parsed Data", parsedParks)
    })


}