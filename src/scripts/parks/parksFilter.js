 resultsInj = document.querySelector("#results-section")
function parksInfo(value) {
    console.log("my log", value)
    if (value.length === 0) {
        alert("There are no events for this category today!")
    } else {
        htmlBuilder.clearContainer(resultsInj)
        for (let i = 0; i < 5 && i < value.length; i++) {
            console.log("whats up in the for loop")
            let parkAddress = value[i].mapped_location.human_address.split(`"`)
            let parkName = value[i].park_name;
            let parkNameE = htmlBuilder.createElementWithText("li", `🍸: ${parkName}`, `park-${i}`, "parkNameResults", undefined, "none")
            let parkAddressE = htmlBuilder.createElementWithText("li", `🥃: ${parkAddress[3]}, ${parkAddress[7]} ${parkAddress[11]}, ${parkAddress[15]} `, `park-address-${i}`, "parkAddressResults", undefined, "none")
            let parkSaveButton = htmlBuilder.createElementWithText("button", "Save", `result-park-button${i}`, "btn", undefined, "button")
            parkSaveButton.classList.add("btn-outline-warning")
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
