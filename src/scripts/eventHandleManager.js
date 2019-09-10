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
})

// adding event listener to concert search
getConcertButton.addEventListener("click", function() {
    let keyword = selectConcert.value
    getConcerts(keyword)
})

// saving selected fetched item into a DOM component adn inserting it into My Itinerary
let eventResultsArr = []
let foodResultsArr = []
let parkResultsArr = []
let concertResultsArr = []
function saveToDom(itemId){
    // querying search result buttons for info to be placed into itinerary
    let saveToDomEventButton = document.querySelector(`#result-event-button${itemId}`)
    let saveToDomConcertButton = document.querySelector(`#result-concert-button${itemId}`)
    let saveToDomParkButton = document.querySelector(`#result-park-button${itemId}`)
    let saveToDomFoodButton = document.querySelector(`#result-food-button${itemId}`)

    let eventResult = document.querySelector(`#event-${itemId}`)
    let parkResult = document.querySelector(`#park-${itemId}`)
    let concertResult = document.querySelector(`#concert-${itemId}`)
    if(eventResult != null){
        eventResultsArr.push(eventResult)
        saveToDomEventButton.addEventListener("click", () => {
            makeItinerary(eventResultsArr[itemId])
        })
    } else if(parkResult != null){
        parkResultsArr.push(parkResult)
        saveToDomParkButton.addEventListener("click", () => {
            makeItinerary(parkResultsArr[itemId])
        })
    } else if(concertResult != null){
        concertResultsArr.push(concertResult)
        saveToDomConcertButton.addEventListener("click", () => {
            makeItinerary(concertResultsArr[itemId])
        })
    }
}

// Function to make elements that will populate the DOM with saved itinerary results
function makeItinerary(item){
    // for(let i = 0; i < items.length; i++){
        if(item.classList = "eventSearchResultsArr"){
            let myItinerary = document.querySelector("#itinerary-event-div")
            htmlBuilder.clearContainer(resultsInj)
            let builtItem = htmlBuilder.createElementWithText("li", `${item.textContent}`, "my-event", undefined, undefined)
            myItinerary.appendChild(builtItem)
        } else if (item.classList === "parkNameResultsArr"){
            let myItinerary = document.querySelector("#itinerary-park-div")
            htmlBuilder.clearContainer(resultsInj)
            // let myItinerary = document.querySelector("#itinerary-section")
            let builtParkItem = htmlBuilder.createElementWithText("li", `Park: ${item.park_name}`, "my-park", undefined, undefined)
            let parkAddressE = htmlBuilder.createElementWithText("li", `Address:${parkAddress} `, `park${i}`, "parkAddressResults", undefined)
            myItinerary.appendChild(builtParkItem)
            myItinerary.appendChild(parkAddressE)
        } else if(item.classList === "concertNameResultsArr"){
            let myItinerary = document.querySelector("#itinerary-conert-div")
        htmlBuilder.clearContainer(resultsInj)
        let builtItem = htmlBuilder.createElementWithText("li", `Concert: ${item.name}`, "my-concert", undefined, undefined)
        myItinerary.appendChild(builtItem)
    }
}
// Event Listener for concerts

getParkButton.addEventListener("click", function(){
    //getOption is a variable that stores the sele
let getOption = selectPark.options[selectPark.selectedIndex].value
    let searchParks = parksCat(getOption)
    getParks(searchParks)

})


getFoodButton.addEventListener("click",function() {
        let getOption = selectFood.options[selectFood.selectedIndex].value
        let searchFood = foodCat(getOption)
        getFood(searchFood)
})







