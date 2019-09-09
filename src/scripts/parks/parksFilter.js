 resultsInj = document.querySelector("#results-section")

 let parksInfo = (value) => {
     console.log("my log", value)
     if (value.length === 0) {
         alert("There are no events for this category today!")
     } else {
         htmlBuilder.clearContainer(resultsInj)
         for (let i = 0; i < 5 && i < value.length; i++) {
             console.log("whats up in the for loop", value)
             let parkAddress = value[i].mapped_location.human_address;
             let parkName = value[i].park_name;
             let parkNameE = htmlBuilder.createElementWithText("li", `Park Name ${parkName}`, `park-${i}`, "parkNameResults")
             let parkAddressE = htmlBuilder.createElementWithText("li", `ParkAddress|${parkAddress}`, `park-address-${i}`, "parkAddressResults")
             let saveParkButton = htmlBuilder.createElementWithText("button", "Save", `result-park-button${i}`, "btn", undefined, "button")
             saveParkButton.classList.add("btn-primary")
             resultsInj.appendChild(parkNameE)
             resultsInj.appendChild(parkAddressE)
             resultsInj.appendChild(saveParkButton)
             let buttonId = i;
             saveToDom(buttonId)
             console.log(name)
         }
     }
 }
 console.log("hello")