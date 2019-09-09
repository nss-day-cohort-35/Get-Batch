resultsInj = document.querySelector("#results-section")

let foodInfo = (value) => {
    console.log("my log", value)
    if (value.length === 0) {
        alert("There are no foods for this category today")
    } else {
        htmlBuilder.clearContainer(resultsInj)
        for (let i = 0; i < 5 && i < value.length; i++) {
            let foodAddress = value[i].restaurants[i].restaurant.location.address;
            let foodName = value[i].restaurants[i].restaurant.name;
            let foodNameE = htmlBuilder.createElementWithText("li", `food Name| ${foodName}`, `food-${i}`, "foodNameResults")
            let foodAddressE = htmlBuilder.createElementWithText("li", `foodAddress| ${foodAddress}`, `food${i}`, "foodAddressResults")
            let saveParkButton = htmlBuilder.createElementWithText("button", "Save", `park-result-save-button-${i}`, "btn", undefined, "button")
            saveParkButton.classList.add("btn-primary")
            resultsInj.appendChild(foodNameE) 
            resultsInj.appendChild(foodAddressE)
            resultsInj.appendChild(saveParkButton)
            let buttonId = i;
            saveToDom(buttonId)
            console.log(name)
        }
    }

        }
















    
