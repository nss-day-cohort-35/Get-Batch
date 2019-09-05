




const restaurantHTML = (restaurantObject) => {
    return `
    <aside>
        <h1>${restaurantObject.name}</h1>
        <button class="restaurantSaveButton">Save</button>
    </aside>`

}


const restaurantResults = document.querySelector("#restaurantResults");
console.table(restaurantResults)
const printToDOM = (htmlString) => {
    restaurantResults.innerHTML += restaurantHTML}
