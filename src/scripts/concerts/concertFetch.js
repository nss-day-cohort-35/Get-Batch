function getConcerts(){
    fetch(` `)
    .then(concert => concert.json())
    .then(parsedConcert => {
        console.log('concert', parsedConcert)
    })
}