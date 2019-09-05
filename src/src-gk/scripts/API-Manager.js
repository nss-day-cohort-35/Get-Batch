


// const restaurantName = document.querySelector("#restaurantsSearchField")

const restaurantFetcher = () => {
   return fetch(URL, {
    mode: 'cors',
    headers: { "user-key":"1970c843d733f5911deb2a3cd0dc2c4b",
      'Access-Control-Allow-Origin':'*'
    }
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
