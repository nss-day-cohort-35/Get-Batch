resultsInj = document.querySelector("#results-section")

let foodInfo = (value) => {
    console.log("my log", value)
    if (value.length === 0) {

        alert("There are no foods for this category today")
    } else {
        console.log("hey value", value)
        htmlBuilder.clearContainer(resultsInj)
        for (let i = 0; i < 5 && i < value.length; i++) {
            let foodAddress = value[i].restaurant.location.address;
            let foodName = value[i].restaurant.name;
            let foodNameE = htmlBuilder.createElementWithText("li", `Name| ${foodName}`, `food-${i}`, "foodNameResults")
            let foodAddressE = htmlBuilder.createElementWithText("li", `Address| ${foodAddress}`, `food-address${i}`, "foodAddressResults")
            let saveFoodButton = htmlBuilder.createElementWithText("button", "Save", `result-food-button${i}`, "btn", undefined, "button")
            saveFoodButton.classList.add("btn-primary")
            resultsInj.appendChild(foodNameE)
            resultsInj.appendChild(foodAddressE)
            resultsInj.appendChild(saveFoodButton)
            let buttonId = i;
            saveToDom(buttonId)
            console.log(name)
        }
    }

}