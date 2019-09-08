// making a reference to each search button we need to target and setting them to a variable
let getEventButton = document.querySelector("#event-button")
let getParkButton = document.querySelector("#park-button")
let getConcertButton = document.querySelector("#concert-button")
let getFoodButton = document.querySelector("#food-button")

// Making a reference to the input element for concerts
let selectConcert = document.querySelector("#concert-input")

// making a reference to the select element for events
let selectEvent = document.querySelector("#event-select")
let selectPark = document.querySelector("#parks-select")

// adding event listener to event search 
getEventButton.addEventListener("click", function() {
    let getOption = selectEvent.options[selectEvent.selectedIndex].value
    let searchEvents = eventCatNum(getOption)
    getEvents(searchEvents)
    console.log("gottem")
})

// adding event listener to concert search
getConcertButton.addEventListener("click", function() {
    let keyword = selectConcert.value
    getConcerts(keyword)
})

// saving selected fetched item into a DOM component adn inserting it into My Itinerary
let allResults = []
function saveToDom(itemId){
    let saveToDomButton = document.querySelector(`#resultSaveButton-${itemId}`)
    let eventResult = document.querySelector(`#event-${itemId}`)
    let parkResult = document.querySelector(`#park-${itemId}`)
    let concertResult = document.querySelector(`#concert-${itemId}`)
    if(eventResult != null){
        allResults.push(eventResult)
        saveToDomButton.addEventListener("click", () => {
            console.log("Event", allResults)
            makeItinerary(allResults[itemId])})
    } else if(parkResult != null){
        allResults.push(parkResult)
        saveToDomButton.addEventListener("click", () => {
            console.log("Park", allResults)
            makeItinerary(allResults[itemId])
        })
    } else if(concertResult != null){
        allResults.push(concertResult)
        saveToDomButton.addEventListener("click", () => {
            console.log("Concert", allResults)
            makeItinerary(allResults[itemId])
        })
    }
}

// Function to make elements that will populate the DOM with saved itinerary results
function makeItinerary(item){
    console.log("item", item)
    // for(let i = 0; i < items.length; i++){
        let myItinerary = document.querySelector("#itinerary-section")
        if(item.classList = "eventSearchResult"){
            htmlBuilder.clearContainer(resultsInj)
            let builtItem = htmlBuilder.createElementWithText("li", `Event: ${item.textContent}`, "my-event")
            myItinerary.appendChild(builtItem)
        } else if (item.classList === "parkNameResult"){
            htmlBuilder.clearContainer(resultsInj)
            // let myItinerary = document.querySelector("#itinerary-section")
            let builtItem = htmlBuilder.createElementWithText("li", `Park: ${item.park_name}`, "my-park")
            myItinerary.appendChild(builtItem)
    } else if(item.classList === "concertNameResult"){
        htmlBuilder.clearContainer(resultsInj)
        let builtItem = htmlBuilder.createElementWithText("li", `Concert: ${item.name}`, "my-concert")
        myItinerary.appendChild(builtItem)
    }
}

// Event Listener for concerts

getParkButton.addEventListener("click", function(){
    let getOption = selectPark.options[selectPark.selectedIndex].value
    let searchParks = parksCat(getOption)
    getParks(searchParks)

})







