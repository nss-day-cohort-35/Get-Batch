// making a reference to each search button we need to target and setting them to a variable
let getEventButton = document.querySelector("#event-button")
let getParkButton = document.querySelector("#park-button")
let getConcertButton = document.querySelector("#concert-button")
let getFoodButton = document.querySelector("#food-button")

// Making a reference to MyItinerary section

// making a reference to the select element
let selectEvent = document.querySelector("#event-select")

// adding event listener to event search 
getEventButton.addEventListener("click", function() {
    let getOption = selectEvent.options[selectEvent.selectedIndex].value
    let searchEvents = eventCatNum(getOption)
    getEvents(searchEvents)
    console.log("gottem")
})

function saveToDom(itemId){
    let saveToDomButton = document.querySelector(`#resultSaveButton-${itemId}`)
    let eventResult = document.querySelector(`#event-${itemId}`)
    saveToDomButton.addEventListener("click", () => {
        console.log("Event", eventResult)
        makeItinerary(eventResult)
    })
}

function makeItinerary(item){
    console.log("item", item)
    let myItinerary = document.querySelector("#itinerary-section")
    let builtItem = htmlBuilder.createElementWithText("li", `Event: ${item.textContent}`, "my-event")
    myItinerary.appendChild(builtItem)
}

