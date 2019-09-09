function concertInfo(value){ 
    console.log("value", value._embedded.events)
    if(value.length === 0){
        alert("There are no events for this category today!")
    } else {
        htmlBuilder.clearContainer(resultsInj)
        for(let i = 0; i < 5 && i < value._embedded.events.length; i++){
            console.log("value", value._embedded.events[0].name)
            let name = value._embedded.events[i].name;
            let builtEvent = htmlBuilder.createElementWithText("li", `${name}`, `concert-${i}`, "concertSearchResults")
            let saveConcertButton = htmlBuilder.createElementWithText("button", "Save", `result-concert-button${i}`, "btn", undefined, "button")
            resultsInj.appendChild(builtEvent)
            resultsInj.appendChild(saveConcertButton)
            saveConcertButton.classList.add("btn-primary")
            const buttonId = i
            console.log("button id", buttonId)
            saveToDom(buttonId)
        }
    }
}
