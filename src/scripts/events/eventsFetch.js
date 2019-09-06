// setting values of category numbers for API search
let food_and_Drink = "110";
let sports = "108";
let arts = "105";
let hobbies = "119";
let family = "115";

// Checking values and comparing them to variables value adn returning the categorys number for the fetch 
const eventCatNum = (value) => {
    let category = "";
    if(value === "Food_and_Drink"){
        category = food_and_Drink
    } else if (value === "Sports"){
        category = sports;
    } else if (value === "Arts"){
        category = arts;
    } else if (value === "Hobbies"){
        category = hobbies;
    } else if (value === "Family"){
        category = family;
    } else {
        console.log("not a category");
    }
    return category
}

// function that will fetch my event data
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
        events.forEach(value => eventInfo(value))
        console.log("parsedData", parsedEvent)
    })
}