function concertInfo(value){ 
    if(value.length === 0){
        alert("There are no events for this category today!")
    } else {
        htmlBuilder.clearContainer(resultsInj)
        for(let i = 0; i < 5 && i < value._embedded.events.length; i++){
            let name = value._embedded.events[i].name;
            let builtEvent = htmlBuilder.createElementWithText("li", `${name}`, `concert-${i}`, "concertSearchResults")
            let saveConcertButton = htmlBuilder.createElementWithText("button", "Save", `resultConcertButton-${i}`, "btn", undefined, "button")
            resultsInj.appendChild(builtEvent)
            resultsInj.appendChild(saveConcertButton)
            saveConcertButton.classList.add("btn-primary")
            const buttonId = i
            saveToDom(buttonId)
        }
    }
}
