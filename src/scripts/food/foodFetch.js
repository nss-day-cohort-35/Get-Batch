const foodCat = value => {
    let category = "";
    if (value === "greek") {
        category = "greek";
    } else if (value === "tex-mex") {
        category = "tex-mex";
    } else if (value === "golfCourse") {
        category = "golf_course=Yes";
    } else if (value === "basketballCourts") {
        category = "basketball_courts=Yes";
    } else if (value === "footballFields") {
        category = "football_multi_purpose_fields=Yes";
    } else if (value === "dogParks") {
        category = "dog_park=Yes";
    } else if (value === "natureCenters") {
        category = "nature_center=Yes";
    } else if (value === "lakes") {
        category = "lake=Yes"
    } else {
        console.log("not a category");
    }
    return category;
};


const getfood = (foodsValue) => {
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisine=${foodsValue}`, {
            headers: {
                "user-key": "fc39be8a8b64fd8520e5e401b0981f2d"
            }
        })
        .then(foodData => foodData.json())
        .then(parsedFood => {

            console.log(parsedFood)
            foodInfo(parsedFood)
        })

}
getfood()




