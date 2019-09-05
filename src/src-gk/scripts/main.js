

const restResultsSection = document.querySelector("#restaurantResults")

const searchButtonInput = document.querySelector("#searchRestaurantButton");
const toItineraryButton = document.querySelector("#addToItinerary");



searchButtonInput.addEventListener("click", () => {
    event.preventDefault();
    restResultsSection.innerHTML = "";
  
    restaurantDataFetcher(restInput.value).then(data => {
      const restArray = data.restaurants;
      restArray.forEach(restaurant => {
        const restHTML = createRestaurantHTML(restaurant.restaurant);
        restResultsSection.innerHTML += restHTML;
      });
    });
  });
  restResultsSection.addEventListener("click", event => {
    const uniqueID = event.target.id.split("--")[1];
    idFetcher(uniqueID).then(data => {
      const finishedItem = itineraryHTMLCreator(data);
      restItinerarySection.innerHTML += finishedItem;
    });
})