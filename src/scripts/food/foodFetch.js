// const foodCat = value => {
//     let category = "";
//     console.log(value)
//     if (value === "Greek") {
//         category = "Greek";
//     } else if (value === "Tex-Mex") {
//         category = "Tex-Mex";
//     } else if (value === "Burger") {
//         category = "Burger";
//     } else if (value === "American, Diner, Sandwich") {
//         category = "American, Diner, Sandwich";
//     } else if (value === "Diner, Southern") {
//         category = "Diner, Southern";
//     } else if (value === "American, Steak") {
//         category = "American, Steak";
//     } else if (value === "BBQ, Burger, Southern") {
//         category = "BBQ, Burger, Southern";
//     } else if (value === "Seafood, Sushi") {
//         category = "Seafood, Sushi"
//     } else {
//         console.log("not a category");
//     }
//     return category;
// };

let foodArray = []
const getFood = (foodsValue) => {
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${foodsValue}`, {
            headers: {
                "user-key": "fc39be8a8b64fd8520e5e401b0981f2d"
            }
        })
        .then(foodData => foodData.json())
        .then(parsedFood => parsedFood.restaurants)
        .then(parsedFood => {
            foodArray.push(parsedFood)
            foodArray.forEach(item => {
                foodInfo(item)
                console.log(item)

            })
        })
}