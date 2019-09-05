




const restaurantHTML = (restaurantObject) => {
    return `
    <aside>
        <h1>${restaurantObject.name}</h1>
        <button class="restaurantSaveButton">Save</button>
    </aside>`

}


const restaurantResults = document.querySelector("#restaurantResults");
console.log(restaurantResults)
const printToDOM = (htmlString) => {
    restaurantResults.innerHTML += restaurantHTML}
export default printToDom