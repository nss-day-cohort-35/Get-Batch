


// const restaurantName = document.querySelector("#restaurantsSearchField")

const restaurantFetcher = () => {
   return fetch(`https://opentable.herokuapp.com/api/restaurants?city=Nashville&per_page=10`)
        .then(r => r.json())
        .then(results => {
            console.table(results)
            for (result of results.restaurants) {
                const restaurantHTML = repHTML(result)
                printToDOM(restaurantHTML)
            }
            const restaurantButtons = document.querySelectorAll(".restaurantSaveButton")
        restaurantButtons.forEach(restaurant => {
        restaurant.addEventListener("click", () => {
            const restaurantName = restaurant.parentElement.childNodes[1]
            const restaurantHtml = `
            <h1>${restaurantName.innerHTML}</h1>
            `
            const restaurantItinerary = document.querySelector("#itineraryContainer__restaurant")    
            restaurantItinerary.innerHTML = restaurantHtml

            console.log(restaurantName)
    });
    })
    })
}
export default restaurantFetcher