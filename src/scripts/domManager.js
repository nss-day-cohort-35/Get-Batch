/*This entire file is a form built by different variables holding the value of an object containing a method that takes in four parameters. the first parameter is an element type
followed by text-content, ID, class and value.
FIRST** The DOM is refenced by declaring displayContainer and then using the Javascript method "query selector" to obtain a refence to the div element on the DOM.
Then, I begin to declare variables and give them values.
Once the variables are declared, the input variables are given placeholders and the process of appending all the variables begins */


// querying the DOM to get reference from an element with the ID of display-container
const displayContainer = document.querySelector("#display-container")

//Creating a div wrapper  
let divWrapper = htmlBuilder.createElementWithText("div", undefined, "div-wrapper", "wrapper", undefined)
let mainHeader = htmlBuilder.createElementWithText("header", undefined, "main-header", "header", undefined)
let h1Wrapper = htmlBuilder.createElementWithText("div", undefined, "h1-wrapper", "h1Wrapper", undefined)
let h1 = htmlBuilder.createElementWithText("h1", "Welcome To Nashville", "H-One", undefined, undefined)

//main body variable which contains the main content
let mainBody = htmlBuilder.createElementWithText("main", undefined, "main-body", "")
let h2Wrapper = htmlBuilder.createElementWithText("div", undefined, )
let h2 = htmlBuilder.createElementWithText("h2", "Search")

//Creating 1st & 2nd articles. The first article will hold the form containing fieldsets and user inputs 
// The second article will contain the results and itinerary setions

let secondArticle = htmlBuilder.createElementWithText("article")
let resultsSection = htmlBuilder.createElementWithText("section")
let itinerarysection = htmlBuilder.createElementWithText("section")


// Creating form to hold fieldsets
let form = htmlBuilder.createElementWithText("form")

// Creating fieldset variables
let firstArticle = htmlBuilder.createElementWithText("article")
let foodFieldSet = htmlBuilder.createElementWithText("fieldset")
let concertFieldSet = htmlBuilder.createElementWithText("fieldset")
let eventsFieldSet = htmlBuilder.createElementWithText("fieldset")
let parksFieldSet = htmlBuilder.createElementWithText("fieldset")

// Creating 4 user input elements
let foodInput = htmlBuilder.createElementWithText("input")
let parksInput = htmlBuilder.createElementWithText("input")
let concertsInput = htmlBuilder.createElementWithText("input", undefined, "concert-input", "concertInput", undefined, "date")
let eventsInput = htmlBuilder.createElementWithText("select", undefined, "eventSelect")

// Creating footer element containing a div, ul, 4 li and 4 anchor tags

let footer = htmlBuilder.createElementWithText("footer")
let linkWrapper = htmlBuilder.createElementWithText("div")
let ul = htmlBuilder.createElementWithText("ul")
let liOne = htmlBuilder.createElementWithText("li")
let liTwo = htmlBuilder.createElementWithText("li")
let liThree = htmlBuilder.createElementWithText("li")
let liFour = htmlBuilder.createElementWithText("li")

let a1 = htmlBuilder.createAnchorElement("a", undefined, "anchor-one", "anchorOne", undefined)
let a2 = htmlBuilder.createAnchorElement("a", undefined, "anchor-two", "anchorTwo")
let a3 = htmlBuilder.createAnchorElement("a", undefined, )
let a4 = htmlBuilder.createAnchorElement("a", undefined, )
// Creating options for events select element
let eventSelect1 = htmlBuilder.createElementWithText("option", "Food & Drink", undefined, undefined, "Food_and_Drink")
let eventSelect2 = htmlBuilder.createElementWithText("option", "Family Friendly", undefined, undefined, "Family")
let eventSelect3 = htmlBuilder.createElementWithText("option", "Hobbies", undefined, undefined, "Hobbies")
let eventSelect4 = htmlBuilder.createElementWithText("option", "Sports", undefined, undefined, "Sports")
let eventSelect5 = htmlBuilder.createElementWithText("option", "Visual Arts", undefined, undefined, "Arts")

// Creating button for feildset
let eventButton = htmlBuilder.createElementWithText("button", "Search", "btn btn-primary", "eventButton")
let parkButton = htmlBuilder.createElementWithText("button", "Search", "btn btn-primary", "parkButton")
let concertButton = htmlBuilder.createElementWithText("button", "Search", "btn btn-primary", "concertButton")
let foodButton = htmlBuilder.createElementWithText("button", "Search", "btn btn-primary", "foodButton")

//input placeholders
foodInput.placeholder = "search by food type"
parksInput.placeholder = "parks by feature"
concertsInput.placeholder = "concerts input"
eventsInput.placeholder = "search events"





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
console.log(displayContainer)


// appending articles to the main element

mainBody.appendChild(firstArticle)
firstArticle.appendChild(form)

//appending fieldsets to form and then appending inputs to the fieldsets
form.appendChild(foodFieldSet).appendChild(foodInput)
form.appendChild(concertFieldSet).appendChild(concertsInput)
form.appendChild(eventsFieldSet).appendChild(eventsInput).appendChild(eventSelect1)
form.appendChild(parksFieldSet).appendChild(parksInput)

// appending options to select element
eventsInput.appendChild(eventSelect1)
eventsInput.appendChild(eventSelect2)
eventsInput.appendChild(eventSelect3)
eventsInput.appendChild(eventSelect4)
eventsInput.appendChild(eventSelect5)

//Appending button to feildset
eventsFieldSet.appendChild(eventButton)
parksFieldSet.appendChild(parkButton)
concertFieldSet.appendChild(concertButton)
foodFieldSet.appendChild(foodButton)

// Appending second article to the main body
mainBody.appendChild(secondArticle)
secondArticle.appendChild(resultsSection)
secondArticle.appendChild(itinerarysection)