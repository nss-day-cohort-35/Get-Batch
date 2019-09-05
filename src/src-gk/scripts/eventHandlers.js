




const saveRestaurantButton = document.querySelector("#saveRestaurantButton")
    saveRestaurantButton.addEventListener("click", () => {
        document.querySelector("#restaurantResults").innerHTML = ""
        restaurantFetcher()
    })
    export default saveRestaurantButton