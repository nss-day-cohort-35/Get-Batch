// querying the DOM to get reference from an element with the ID of display-container
const displayContainer = document.querySelector("#display-container")

//div wrapper 
let divWrapper = htmlBuilder.createElementWithText("div", undefined, "div-wrapper", "wrapper", undefined)
let mainHeader = htmlBuilder.createElementWithText("header", undefined, "main-header", "header", undefined)
let h1Wrapper = htmlBuilder.createElementWithText("div", undefined, "h1-wrapper", "h1Wrapper", undefined)
let h1 = htmlBuilder.createElementWithText("h1", "Welcome To Nashville", "H-One", undefined, undefined)

//main body variable which contains the main content
let mainBody = htmlBuilder.createElementWithText("main")
let h2Wrapper = htmlBuilder.createElementWithText("div")
let h2 = htmlBuilder.createElementWithText("h2", )

let firstArticle = htmlBuilder.createElementWithText()

//form to hold fieldsets
let form = htmlBuilder.createElementWithText()

//fieldset variables
let foodFieldSet = htmlBuilder.createElementWithText()
let conceertFieldSet = htmlBuilder.createElementWithText()
let eventsFieldSet = htmlBuilder.createElementWithText()
let parksFieldSet = htmlBuilder.createElementWithText()


let foodInput = foodFieldSet = htmlBuilder.createElementWithText()
let food = foodFieldSet = htmlBuilder.createElementWithText()
let foodInput = foodFieldSet = htmlBuilder.createElementWithText()
let foodInput = foodFieldSet = htmlBuilder.createElementWithText()





//appending the div wrapper, header and h1 one to display container then console.logging the results
displayContainer.appendChild(divWrapper)
divWrapper.appendChild(mainHeader)
mainHeader.append(h1Wrapper)
h1Wrapper.appendChild(h1)
console.log(displayContainer)


//Appending the main body to the display container and then appending corresponding child elements
displayContainer.appendChild(mainBody)
mainBody.appendChild(h2Wrapper)
h2Wrapper.appendChild(h2)