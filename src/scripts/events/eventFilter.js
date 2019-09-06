// Function to loop threw event array and build DOM components for each item (up to 5)
let resultsInj = document.querySelector("#results-section")
function eventInfo(value){
    console.log("my log", value.length) 
    if(value.length === 0){
        alert("There are no events for this category today!")
    } else {
        htmlBuilder.clearContainer(resultsInj)
        for(let i = 0; i < 5 && i < value.length; i++){
            let name = value[i].name.text;
            let builtEvent = htmlBuilder.createElementWithText("li", `name: ${name}`, `event-${i}`, "eventSearchResults")
            resultsInj.appendChild(builtEvent)
            console.log("")
        }
    }
}

