
const searchRestaurants = document.querySelector("#searchRestaurantButton")
searchRestaurants.addEventListener("click",{ Console.table(searchRestaurants.value)})



const saveRestaurantButton = document.querySelector("#saveRestaurantButton")
    saveRestaurantButton.addEventListener("click", () => {
        document.querySelector("#restaurantResults").innerHTML = ""
        restaurantFetcher()
    })
