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
let eventResults = []
let foodResults = []
let parkResults = []
let concertResults = []
function saveToDom(itemId){
    // querying search result buttons for info to be placed into itinerary
    let saveToDomEventButton = document.querySelector(`#resultEventButton-${itemId}`)
    let saveToDomConcertButton = document.querySelector(`#resultConcertButton-${itemId}`)
    let saveToDomParkButton = document.querySelector(`#park-result-save-button-${itemId}`)
    let saveToDomFoodButton = document.querySelector(`#resultFoodButton-${itemId}`)

    let eventResult = document.querySelector(`#event-${itemId}`)
    let parkResult = document.querySelector(`#park-${itemId}`)
    let concertResult = document.querySelector(`#concert-${itemId}`)
    if(eventResult != null){
        eventResults.push(eventResult)
        saveToDomEventButton.addEventListener("click", () => {
            console.log("Event", eventResults)
            makeItinerary(eventResults[itemId])
        })
    } else if(parkResult != null){
        parkResults.push(parkResult)
        saveToDomParkButton.addEventListener("click", () => {
            console.log("Park", parkResults)
            makeItinerary(parkResults[itemId])
        })
    } else if(concertResult != null){
        concertResults.push(concertResult)
        saveToDomConcertButton.addEventListener("click", () => {
            makeItinerary(concertResults[itemId])
        })
    }
}

// Function to make elements that will populate the DOM with saved itinerary results
function makeItinerary(item){
    console.log("item", item)
    // for(let i = 0; i < items.length; i++){
        if(item.classList = "eventSearchResult"){
            let myItinerary = document.querySelector("#itinerary-event-div")
            htmlBuilder.clearContainer(resultsInj)
            let builtItem = htmlBuilder.createElementWithText("li", `Event: ${item.textContent}`, "my-event")
            myItinerary.appendChild(builtItem)
        } else if (item.classList === "parkNameResult"){
            let myItinerary = document.querySelector("#itinerary-park-div")
            htmlBuilder.clearContainer(resultsInj)
            // let myItinerary = document.querySelector("#itinerary-section")
            let builtItem = htmlBuilder.createElementWithText("li", `Park: ${item.park_name}`, "my-park")
            myItinerary.appendChild(builtItem)
        } else if(item.classList === "concertNameResult"){
            let myItinerary = document.querySelector("#itinerary-conert-div")
        htmlBuilder.clearContainer(resultsInj)
        let builtItem = htmlBuilder.createElementWithText("li", `Concert: ${item.name}`, "my-concert")
        myItinerary.appendChild(builtItem)
    }
}
// Event Listener for concerts

getParkButton.addEventListener("click", function(){
    //getOption is a variable that stores the sele
alert("Haha too late! ") 
let getOption = selectPark.options[selectPark.selectedIndex].value
    let searchParks = parksCat(getOption)
    getParks(searchParks)

})


getFoodButton.addEventListener("click",function() {
        let getOption = selectFood.options[selectFood.selectedIndex].value
        let searchFood = foodCat(getOption)
        getFood(searchFood)
})







