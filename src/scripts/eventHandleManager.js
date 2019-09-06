// making a reference to each search button we need to target and setting them to a variable
let getEventButton = document.querySelector("#event-button")
let getParkButton = document.querySelector("#park-button")
let getConcertButton = document.querySelector("#concert-button")
let getFoodButton = document.querySelector("#food-button")

// making a reference to the select element
let selectEvent = document.querySelector("#event-select")
let selectPark = document.querySelector("#park-select")

// adding event listeners to all button
getEventButton.addEventListener("click", function() {
    let getOption = selectEvent.options[selectEvent.selectedIndex].value
    let searchEvents = eventCatNum(getOption)
    getEvents(searchEvents)
    console.log("gottem")
})


getParkButton.addEventListener("click", function(){
    let getOption = selectPark.options[selectPark.selectedIndex].value
    let searchParks = parksCat(getOption)
    getParks(searchParks)

})







