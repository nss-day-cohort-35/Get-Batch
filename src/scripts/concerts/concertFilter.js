function concertInfo(value){ 
    if(value.length === 0){
        alert("There are no events for this category today!")
    } else {
        htmlBuilder.clearContainer(resultsInj)
        for(let i = 0; i < 5 && i < value._embedded.events.length; i++){
            let name = value._embedded.events[i].name;
            let builtEvent = htmlBuilder.createElementWithText("li", `🍷: ${name}`, `concert-${i}`, "concert-search-results", undefined, "none")
            let saveConcertButton = htmlBuilder.createElementWithText("button", "Save", `result-concert-button${i}`, "btn", undefined, "button")
            resultsInj.appendChild(builtEvent)
            resultsInj.appendChild(saveConcertButton)
            saveConcertButton.classList.add("btn-outline-warning")
            const buttonId = i
            saveToDom(buttonId)
        }
    }
}
