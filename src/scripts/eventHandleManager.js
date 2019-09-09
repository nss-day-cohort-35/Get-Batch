// making a reference to each search button we need to target and setting them to a variable
let getEventButton = document.querySelector("#event-button")
let getParkButton = document.querySelector("#park-button")
let getConcertButton = document.querySelector("#concert-button")
let getFoodButton = document.querySelector("#food-button")
// making a reference to the select element for events
// Making a reference to the input element for concerts
let selectConcert = document.querySelector("#concert-input")
let selectEvent = document.querySelector("#event-select")
let selectPark = document.querySelector("#parks-select")
let selectFood = document.querySelector("#food-select")

// adding event listener to event search 
getEventButton.addEventListener("click", function () {
    let getOption = selectEvent.options[selectEvent.selectedIndex].value
    let searchEvents = eventCatNum(getOption)
    getEvents(searchEvents)
    console.log("gottem")
})

// adding event listener to concert search
getConcertButton.addEventListener("click", function () {
    let keyword = selectConcert.value
    getConcerts(keyword)
})

getParkButton.addEventListener("click", function () {

    alert("Haha too late! ")
    let getOption = selectPark.options[selectPark.selectedIndex].value
    let searchParks = parksCat(getOption)
    getParks(searchParks)

})
getFoodButton.addEventListener("click", function () {
    let getOption = selectFood.value
    // let searchFood = foodCat(getOption)
    getFood(getOption)
    console.log(getFoodButton)
})

// saving selected fetched item into a DOM component adn inserting it into My Itinerary
let eventResultsArr = []
let foodResultsArr = []
let parkResultsArr = []
let concertResultsArr = []

function saveToDom(itemId) {
    console.log("this is the item Id on line 49", itemId)
    // querying search result buttons for info to be placed into itinerary
    let saveToDomEventButton = document.querySelector(`#result-event-button${itemId}`)
    let saveToDomConcertButton = document.querySelector(`#result-concert-button${itemId}`)
    let saveToDomParkButton = document.querySelector(`#result-park-button${itemId}`)
    let saveToDomFoodButton = document.querySelector(`#result-food-button${itemId}`)
    console.log(saveToDomFoodButton)

    let eventResult = document.querySelector(`#event-${itemId}`)
    let parkResult = document.querySelector(`#park-${itemId}`)
    let concertResult = document.querySelector(`#concert-${itemId}`)
    let restaurantResult = document.querySelector(`#food-${itemId}`)
    if (eventResult != null) {
        eventResultsArr.push(eventResult)
        saveToDomEventButton.addEventListener("click", () => {
            console.log("Event", eventResultsArr)
            makeItinerary(eventResultsArr[itemId])
        })
    } else if (parkResult != null) {
        parkResultsArr.push(parkResult)
        saveToDomParkButton.addEventListener("click", () => {
            console.log("Park", parkResultsArr)
            makeItinerary(parkResultsArr[itemId])
        })
    } else if (concertResult != null) {
        concertResultsArr.push(concertResult)
        saveToDomConcertButton.addEventListener("click", () => {
            makeItinerary(concertResultsArr[itemId])
        })
    } else(restaurantResult != null); {
        foodResultsArr.push(restaurantResult)
        saveToDomFoodButton.addEventListener("click", () => {
            console.log(foodResultsArr[itemId])
            makeItinerary(foodResultsArr[itemId])
        })

    }
}


// Function to make elements that will populate the DOM with saved itinerary results
function makeItinerary(item) {
    console.log("item", item)
    // for(let i = 0; i < items.length; i++){
    if (item.classList = "eventSearchResults") {
        let myItinerary = document.querySelector("#itinerary-event-div")
        htmlBuilder.clearContainer(resultsInj)
        let builtItem = htmlBuilder.createElementWithText("li", `${item.textContent}`, "my-event")
        myItinerary.appendChild(builtItem)
    } else if (item.classList === "parkNameResults") {
        let myItinerary = document.querySelector("#itinerary-park-div")
        htmlBuilder.clearContainer(resultsInj)
        // let myItinerary = document.querySelector("#itinerary-section")
        let builtItem = htmlBuilder.createElementWithText("li", `Park: ${item.park_name}`, "my-park")
        myItinerary.appendChild(builtItem)
    } else if (item.classList === "concertNameResults") {
        let myItinerary = document.querySelector("#itinerary-conert-div")
        htmlBuilder.clearContainer(resultsInj)
        let builtItem = htmlBuilder.createElementWithText("li", `Concert: ${item.name}`, "my-concert")
        myItinerary.appendChild(builtItem)
    }
}