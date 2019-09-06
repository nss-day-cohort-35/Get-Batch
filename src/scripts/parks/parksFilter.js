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
            let parkAddressE = htmlBuilder.createElementWithText("li", `address:${parkAddress} `, `park${i}`, "parkAddressResults")
            resultsInj.appendChild(parkNameE, parkAddressE)
            console.log(name)
        }
    }
}
console.log("hello")