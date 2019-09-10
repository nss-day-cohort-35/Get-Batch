/*This entire file is a form built by different variables holding the value of an object containing a method that takes in six parameters. the first parameter is an element type
followed by text-content, ID, class,value and the "type" attribute.
FIRST** The DOM is refenced by declaring displayContainer and then using the Javascript method "query selector" to obtain a refence to the div element on the DOM.
Then, I begin to declare variables and give them values.
Once the variables are declared, the input variables are given placeholders and the process of appending all the variables begins */


// querying the DOM to get reference from an element with the ID of display-container
const displayContainer = document.querySelector("#display-container")
//an object containing a method that builds the form whenever it is called
let buildForm = {

    invokeBuildForm: () => {
        //Creating a div wrapper  
        divWrapper = htmlBuilder.createElementWithText("div", undefined, "div-wrapper", "wrapper")
        mainHeader = htmlBuilder.createElementWithText("header", undefined, "main-header", "header", undefined, undefined)
        h1Wrapper = htmlBuilder.createElementWithText("div", undefined, "h1-wrapper", "h1Wrapper", undefined, undefined)
        h1 = htmlBuilder.createElementWithText("h1", "🥂 Welcome Batch's 🍆💋", "H-One", undefined, undefined, undefined)

        //main body variable which contains the main content
        mainBody = htmlBuilder.createElementWithText("main", undefined, "main-body", "mainBody", undefined, undefined)
        h2Wrapper = htmlBuilder.createElementWithText("div", undefined, "h2-wrapper", "h2Wrapper", undefined, undefined)
        h2 = htmlBuilder.createElementWithText("h2", "Aint no laws, while drinking the Claws!", "h2-search", "h2Search", undefined, undefined)

        //Creating 1st & 2nd articles. The first article will hold the form containing fieldsets and user inputs 
        // The second article will contain the results and itinerary sections.

        secondArticle = htmlBuilder.createElementWithText("article", undefined, undefined, "secondArticle" )
        resultsSection = htmlBuilder.createElementWithText("section", undefined, "results-section", "resultSection")
        resultsH2Wrapper = htmlBuilder.createElementWithText("div", undefined, "results-h2-wrapper", "resultsH2Wrapper", undefined, undefined)
        resultsH2 = htmlBuilder.createElementWithText("h2", "Results:", "results-h2", "resultsH2", undefined, undefined)

        itinerarySection = htmlBuilder.createElementWithText("section", undefined, "itinerary-section", "itinerarySection", undefined, undefined)
        itineraryWrapper = htmlBuilder.createElementWithText("div", undefined, "itinerary-wrapper", undefined)
        itineraryH2 = htmlBuilder.createElementWithText("h2", "My Itinerary", "my-itinerary", undefined)
        itineraryConcertDiv = htmlBuilder.createElementWithText("div", undefined, "itinerary-concert-div", undefined)
        itineraryEventDiv = htmlBuilder.createElementWithText("div", undefined, "itinerary-event-div", undefined)
        itineraryParkDiv = htmlBuilder.createElementWithText("div", undefined, "itinerary-park-div", undefined)
        itineraryFoodDiv = htmlBuilder.createElementWithText("div", undefined, "itinerary-food-div", undefined)

        // Creating form to hold fieldsets
        form = htmlBuilder.createElementWithText("form")

        // Creating fieldset variables
        firstArticle = htmlBuilder.createElementWithText("article", undefined, undefined, "article1")
        foodFieldSet = htmlBuilder.createElementWithText("fieldset")
        concertFieldSet = htmlBuilder.createElementWithText("fieldset")
        eventsFieldSet = htmlBuilder.createElementWithText("fieldset")
        parksFieldSet = htmlBuilder.createElementWithText("fieldset")

        // Creating 4 user input elements
        foodInput = htmlBuilder.createElementWithText("input", undefined, "food-select", "foodInput", undefined, "text")
        parksInput = htmlBuilder.createElementWithText("select", undefined, "parks-select", "parksInput", undefined, undefined)
        concertsInput = htmlBuilder.createElementWithText("input", undefined, "concert-input", "concertInput", undefined, "text")
        eventsInput = htmlBuilder.createElementWithText("select", undefined, "event-select", "eventSelect", undefined, undefined)

        // Creating footer element containing a div, ul, 4 li and 4 anchor tags
        footer = htmlBuilder.createElementWithText("footer", undefined, "footer-element", "footerElement")
        linkWrapper = htmlBuilder.createElementWithText("div", "link-wrapper", )
        ul = htmlBuilder.createElementWithText("ul")
        liOne = htmlBuilder.createElementWithText("li")
        liTwo = htmlBuilder.createElementWithText("li")
        liThree = htmlBuilder.createElementWithText("li")
        liFour = htmlBuilder.createElementWithText("li")

        a1 = htmlBuilder.createAnchorElement("a", undefined, "anchor-one", "anchorOne", undefined)
        a2 = htmlBuilder.createAnchorElement("a", undefined, "anchor-two", "anchorTwo", undefined, )
        a3 = htmlBuilder.createAnchorElement("a", undefined, "anchor-three", "anchorThree", undefined)
        a4 = htmlBuilder.createAnchorElement("a", undefined, "anchor-four", "anchorFour", undefined)
        // Creating options for events select element

        // eventSelect.setAttribute = "selected,selected"
        eventSelect = htmlBuilder.createElementWithText("option", "Select Event Type", "eventSelect", undefined, "Select Event Type")
        eventSelect1 = htmlBuilder.createElementWithText("option", "Food & Drink", "eventSelect", undefined, "Food_and_Drink")
        eventSelect2 = htmlBuilder.createElementWithText("option", "Family Friendly", "eventSelect", undefined, "Family")
        eventSelect3 = htmlBuilder.createElementWithText("option", "Hobbies", "eventSelect", undefined, "Hobbies")
        eventSelect4 = htmlBuilder.createElementWithText("option", "Sports", "eventSelect", undefined, "Sports")
        eventSelect5 = htmlBuilder.createElementWithText("option", "Visual Arts", "eventSelect", undefined, "Arts")

        //Creating options element for the park selections
        parkSelect = htmlBuilder.createElementWithText("option","Select Park by Feature")
        parkSelect1 = htmlBuilder.createElementWithText("option", "VolleyBall", undefined, undefined, "volleyball")
        parkSelect2 = htmlBuilder.createElementWithText("option", "Baseball Fields", undefined, undefined, "baseballFields")
        parkSelect3 = htmlBuilder.createElementWithText("option", "Basketball Courts", undefined, undefined, "basketballCourts")
        parkSelect4 = htmlBuilder.createElementWithText("option", "Golf Course", undefined, undefined, "golfCourse")
        parkSelect5 = htmlBuilder.createElementWithText("option", "Football Fields", undefined, undefined, "footballFields")
        parkSelect6 = htmlBuilder.createElementWithText("option", "Dog Parks", undefined, undefined, "dogParks")
        parkSelect7 = htmlBuilder.createElementWithText("option", "Nature Center", undefined, undefined, "natureCenters")
        parkSelect8 = htmlBuilder.createElementWithText("option", "Parks including lakes", undefined, undefined, "lakes")

        // //Creating options element for the food selections
        // foodSelect1 = htmlBuilder.createElementWithText.createElementWithText("option","Burger",undefined,undefined,"Burger")
        // foodSelect2 = htmlBuilder.createElementWithText.createElementWithText("option","Steak",undefined,undefined,"Steak")
        // foodSelect3 = htmlBuilder.createElementWithText.createElementWithText("option","Pizza",undefined,undefined,"Pizza")
        // foodSelect4 = htmlBuilder.createElementWithText.createElementWithText("option","Greek",undefined,undefined,"Greek")
        // foodSelect5 = htmlBuilder.createElementWithText.createElementWithText("option","Pasta",undefined,undefined,"Pasta")
        // foodSelect6 = htmlBuilder.createElementWithText.createElementWithText("option","Sauce",undefined,undefined,"Sauce")
        // foodSelect7 = htmlBuilder.createElementWithText.createElementWithText("option","Drinks",undefined,undefined,"Drinks")
        // foodSelect8 = htmlBuilder.createElementWithText.createElementWithText("option","Yo Momma",undefined,undefined,"Yo Momma")


        // Creating button for fieldset
         eventButton = htmlBuilder.createElementWithText("button", "Search", "event-button", "btn", undefined, "button")
         parkButton = htmlBuilder.createElementWithText("button", "Search", "park-button", "btn", undefined, "button")
         concertButton = htmlBuilder.createElementWithText("button", "Search", "concert-button", "btn", undefined, "button")
         foodButton = htmlBuilder.createElementWithText("button", "Search", "food-button", "btn", undefined, "button")
        
        //added classes to buttons for styling
        eventButton.classList.add("btn-outline-warning")
        parkButton.classList.add("btn-outline-warning")
        concertButton.classList.add("btn-outline-warning")
        foodButton.classList.add("btn-outline-warning")
        
        // added styling to the dropdown menu
        // eventsInput.classList.add("dropdown")
        // parksInput.classList.add("dropdown")

        //Input placeholders
        foodInput.placeholder = "🍻 Come Back at Happy Hour 🍻"
        parksInput.placeholder = "parks by feature"
        concertsInput.placeholder = "concerts input"
        eventsInput.placeholder = "search events"

        //Appending the div wrapper, header and h1 one to display container then console.logging the results
        displayContainer.appendChild(divWrapper)
        divWrapper.appendChild(mainHeader)
        mainHeader.append(h1Wrapper)
        h1Wrapper.appendChild(h1)


        //Appending the main body to the display container and then appending corresponding child elements
        divWrapper.appendChild(mainBody)
        mainBody.appendChild(h2Wrapper)
        h2Wrapper.appendChild(h2)


        //Appending articles to the main element

        mainBody.appendChild(firstArticle)
        firstArticle.appendChild(form)

        //Appending fieldsets to form and then appending inputs to the fieldsets
        form.appendChild(concertFieldSet).appendChild(concertsInput)
        form.appendChild(foodFieldSet).appendChild(foodInput)
        form.appendChild(eventsFieldSet).appendChild(eventsInput)
        form.appendChild(parksFieldSet).appendChild(parksInput)

        //Appending event options to eventSelect element
        eventsInput.appendChild(eventSelect)
        eventsInput.appendChild(eventSelect1)
        eventsInput.appendChild(eventSelect2)
        eventsInput.appendChild(eventSelect3)
        eventsInput.appendChild(eventSelect4)
        eventsInput.appendChild(eventSelect5)

        //Appending parks options to parkSelect element
        parksInput.appendChild(parkSelect   )
        parksInput.appendChild(parkSelect1)
        parksInput.appendChild(parkSelect2)
        parksInput.appendChild(parkSelect3)
        parksInput.appendChild(parkSelect4)
        parksInput.appendChild(parkSelect5)
        parksInput.appendChild(parkSelect6)
        parksInput.appendChild(parkSelect7)
        parksInput.appendChild(parkSelect8)


        //Appending food options to foodSelect element

        // foodInput.appendChild(foodSelect1)
        // foodInput.appendChild(foodSelect2)
        // foodInput.appendChild(foodSelect3)
        // foodInput.appendChild(foodSelect4)
        // foodInput.appendChild(foodSelect5)
        // foodInput.appendChild(foodSelect6)
        // foodInput.appendChild(foodSelect7)
        // foodInput.appendChild(foodSelect8)

        //Appending button to fieldset
        eventsFieldSet.appendChild(eventButton)
        parksFieldSet.appendChild(parkButton)
        concertFieldSet.appendChild(concertButton)
        foodFieldSet.appendChild(foodButton)

        //Appending second article to the main body
        mainBody.appendChild(secondArticle)
        secondArticle.appendChild(resultsH2Wrapper)
        resultsH2Wrapper.appendChild(resultsH2)
        secondArticle.appendChild(resultsSection)
        secondArticle.appendChild(itineraryWrapper)
        secondArticle.appendChild(itinerarySection)
        itinerarySection.appendChild(itineraryH2) 
        itinerarySection.appendChild(itineraryEventDiv) 
        itinerarySection.appendChild(itineraryParkDiv) 
        itinerarySection.appendChild(itineraryFoodDiv) 
        itinerarySection.appendChild(itineraryConcertDiv) 

        // Adding classes to style using bootstrap
        eventsInput.classList.add("custom-select")
        parksInput.classList.add("custom-select")
        foodInput.disabled = true;
        // foodInput.classList.add("disabled")
        // concertsInput.classList.add("form-control")
    }

}
buildForm.invokeBuildForm()