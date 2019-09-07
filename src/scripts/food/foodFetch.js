const getfood = (foodsValue) => {
    fetch(``, {
        headers: {
            "Authorization": "",
            "user-key": ""
        }
    })
    .then(foodData => foodData.json())
    .then(parsedFood => {
       parsedFood.forEach(item =>  {
           
       });


    })
}