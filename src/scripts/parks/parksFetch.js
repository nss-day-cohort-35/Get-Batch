const parksCat = value => {
    let category = "";
    if (value === "volleyball") {
        category = "volleyball=Yes";
    } else if (value === "baseballFields") {
        category = "baseball_fields=Yes";
    } else if (value === "golfCourse") {
        category = "golf_course=Yes";
    } else if (value === "basketballCourts") {
        category = "basketball_courts=Yes";
    } else if (value === "footballFields") {
        category = "football_fields=Yes";
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

const getParks = value => {
    fetch(`https://data.nashville.gov/resource/74d7-b74t.json${value}`, {
            headers: {
                Accept: "application/json",
                "X-App-Token": "PBNHauq9FYSAXZ8QQhUL9C1rh"
            }
        })
        .then(parksData => parksData.json())
        .then(parsedParks => {
            parsedParks.array.forEach(value => parksInf(value));
            console.table("parsed Data", parsedParks);  
        });
};