 resultsInj = document.querySelector("#results-section")
function parksInfo(value) {
    console.log("my log", value)
    if (value.length === 0) {
        alert("There are no events for this category today!")
    } else {
        htmlBuilder.clearContainer(resultsInj)
        for (let i = 0; i < 5 && i < value.length; i++) {
            console.log("whats up in the for loop")
            let parkAddress = value[i].mapped_location.human_address;
            let parkName = value[i].park_name;
            let parkNameE = htmlBuilder.createElementWithText("li", `name: ${parkName}`, `park-${i}`, "parkNameResults")
            let parkAddressE = htmlBuilder.createElementWithText("li", `address:${parkAddress} `, `park-address-${i}`, "parkAddressResults")
            let parkSaveButton = htmlBuilder.createElementWithText("button", "Save", `result-park-button${i}`, "btn", undefined, "button")
            parkSaveButton.classList.add("btn-primary")
            resultsInj.appendChild(parkNameE)
            resultsInj.appendChild(parkAddressE)
            resultsInj.appendChild(parkSaveButton)
            const buttonId = i
            saveToDom(buttonId)
            console.log("here at info", name)
        }
    }
}
console.log("hello")
