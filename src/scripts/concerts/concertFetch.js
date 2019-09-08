
function getConcerts(search) {
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=MBrwcrVJi3VUDjuA0CW0s7I0Z6tTH26Q&keyword=${search}`)
        .then(response => response.json())
        .then(parsedConcert => {
            concertInfo(parsedConcert)
                })
}