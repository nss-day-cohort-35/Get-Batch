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
        console.log(divWrapper)
        mainHeader = htmlBuilder.createElementWithText("header", undefined, "main-header", "header", undefined, undefined)
        h1Wrapper = htmlBuilder.createElementWithText("div", undefined, "h1-wrapper", "h1Wrapper", undefined, undefined)
        h1 = htmlBuilder.createElementWithText("h1", "Welcome To Nashville", "H-One", undefined, undefined, undefined)

        //main body variable which contains the main content
        mainBody = htmlBuilder.createElementWithText("main", undefined, "main-body", "mainBody", undefined, undefined)
        h2Wrapper = htmlBuilder.createElementWithText("div", undefined, "h2-wrapper", "h2Wrapper", undefined, undefined)
        h2 = htmlBuilder.createElementWithText("h2", "Search", "h2-search", "h2Search", undefined, undefined)

        //Creating 1st & 2nd articles. The first article will hold the form containing fieldsets and user inputs 
        // The second article will contain the results and itinerary sections.

        secondArticle = htmlBuilder.createElementWithText("article", )
        resultsSection = htmlBuilder.createElementWithText("section", undefined, "results-section")
        resultsH2Wrapper = htmlBuilder.createElementWithText("div", undefined, "results-h2-wrapper", "resultsH2Wrapper", undefined, undefined)
        resultsH2 = htmlBuilder.createElementWithText("h2", "Results", "results-h2", "resultsH2", undefined, undefined)

        itinerarysection = htmlBuilder.createElementWithText("section", undefined, "itinerary-section", "itinerarySection", undefined, undefined)
        itineraryWrapper = htmlBuilder.createElementWithText("div", undefined, "itinerary-wrapper", undefined)
        itineraryH2 = htmlBuilder.createElementWithText("h2", "My Itinerary", "my-itinerary", undefined, )

        // Creating form to hold fieldsets
        form = htmlBuilder.createElementWithText("form")

        // Creating fieldset variables
        firstArticle = htmlBuilder.createElementWithText("article")
        foodFieldSet = htmlBuilder.createElementWithText("fieldset")
        concertFieldSet = htmlBuilder.createElementWithText("fieldset")
        eventsFieldSet = htmlBuilder.createElementWithText("fieldset")
        parksFieldSet = htmlBuilder.createElementWithText("fieldset")

        // Creating 4 user input elements
        foodInput = htmlBuilder.createElementWithText("input", undefined, "food-input", "foodInput", undefined, undefined)
        parksInput = htmlBuilder.createElementWithText("select", undefined, "parks-select", "parksInput", undefined, undefined)
        concertsInput = htmlBuilder.createElementWithText("input", undefined, "concert-input", "concertInput", undefined, "date")
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
        eventSelect = htmlBuilder.createElementWithText("option", "Select Event Type", undefined, undefined, "Select Event Type")
        eventSelect1 = htmlBuilder.createElementWithText("option", "Food & Drink", undefined, undefined, "Food_and_Drink")
        eventSelect2 = htmlBuilder.createElementWithText("option", "Family Friendly", undefined, undefined, "Family")
        eventSelect3 = htmlBuilder.createElementWithText("option", "Hobbies", undefined, undefined, "Hobbies")
        eventSelect4 = htmlBuilder.createElementWithText("option", "Sports", undefined, undefined, "Sports")
        eventSelect5 = htmlBuilder.createElementWithText("option", "Visual Arts", undefined, undefined, "Arts")

        //Creating options element for the park selections
        parkSelect1 = htmlBuilder.createElementWithText("option", "VolleyBall", undefined, undefined, "volleyball")
        parkSelect2 = htmlBuilder.createElementWithText("option", "Baseball Fields", undefined, undefined, "baseballFields")
        parkSelect3 = htmlBuilder.createElementWithText("option", "Basketball Courts", undefined, undefined, "basketballCourts")
        parkSelect4 = htmlBuilder.createElementWithText("option", "Golf Course", undefined, undefined, "golfCourse")
        parkSelect5 = htmlBuilder.createElementWithText("option", "Football Fields", undefined, undefined, "footballFields")
        parkSelect6 = htmlBuilder.createElementWithText("option", "Dog Parks", undefined, undefined, "dogParks")
        parkSelect7 = htmlBuilder.createElementWithText("option", "Nature Center", undefined, undefined, "natureCenters")
        parkSelect8 = htmlBuilder.createElementWithText("option", "Parks including lakes", undefined, undefined, "lakes")


        // Creating button for fieldset
        eventButton = htmlBuilder.createElementWithText("button", "Search", "event-button", "btn", undefined, "button")
        parkButton = htmlBuilder.createElementWithText("button", "Search", "park-button", "btn", undefined, "button")
        concertButton = htmlBuilder.createElementWithText("button", "Search", "concert-button", "btn", undefined, "button")
        foodButton = htmlBuilder.createElementWithText("button", "Search", "food-button", "btn", undefined, "button")

        //Input placeholders
        foodInput.placeholder = "search by food type"
        parksInput.placeholder = "parks by feature"
        concertsInput.placeholder = "concerts input"
        eventsInput.placeholder = "search events"





        //Appending the div wrapper, header and h1 one to display container then console.logging the results
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


        //Appending articles to the main element

        mainBody.appendChild(firstArticle)
        firstArticle.appendChild(form)

        //Appending fieldsets to form and then appending inputs to the fieldsets
        form.appendChild(foodFieldSet).appendChild(foodInput)
        form.appendChild(concertFieldSet).appendChild(concertsInput)
        form.appendChild(eventsFieldSet).appendChild(eventsInput).appendChild(eventSelect1)
        form.appendChild(parksFieldSet).appendChild(parksInput)

        //Appending event options to eventSelect element
        eventsInput.appendChild(eventSelect)
        eventsInput.appendChild(eventSelect1)
        eventsInput.appendChild(eventSelect2)
        eventsInput.appendChild(eventSelect3)
        eventsInput.appendChild(eventSelect4)
        eventsInput.appendChild(eventSelect5)

        //Appending parks options to parkSelect element
        parksInput.appendChild(parkSelect1)
        parksInput.appendChild(parkSelect2)
        parksInput.appendChild(parkSelect3)
        parksInput.appendChild(parkSelect4)
        parksInput.appendChild(parkSelect5)
        parksInput.appendChild(parkSelect6)
        parksInput.appendChild(parkSelect7)
        parksInput.appendChild(parkSelect8)

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
        secondArticle.appendChild(itinerarysection)
        itineraryWrapper.appendChild(itineraryH2)
        
    }

}
buildForm.invokeBuildForm()