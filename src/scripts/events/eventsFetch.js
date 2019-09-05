// let eventOptions = document.querySelector("") 
let events = [];
const getEvents = (value) => {
    fetch(`https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&location.within=10mi&categories=${value}&start_date.keyword=today&sort_by=best`, {
        headers: {
            "Authorization": "Bearer IRYOP6WU3MKXPWR3ZPCY"
        }
    })
    .then(eventData => eventData.json())
    .then(eventData => eventData.events)
    .then(parsedEvent => {
        events.push(parsedEvent)
        console.log("parsedData", parsedEvent)
    })
}
let sports = "110"
getEvents(sports)