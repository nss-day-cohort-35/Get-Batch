
// let sports = "110"
// getEvents(sports)


let parks = [];

const getParks = (value) => {
    fetch('', {
        headers: {
            "Authorization": ""

        }

    })
    .then(parksData => parksData.json())
    .then(parksData => parksData.parks)
    .then(parsedParks => {
        parks.push(parsedParks)
        console.log("parsed Data", parsedParks)
    })


}