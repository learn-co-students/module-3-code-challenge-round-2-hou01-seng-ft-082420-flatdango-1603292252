const url = "http://localhost:3000/films/1"

fetch(url)
.then(function(resp){
    return resp.json()
})
.then(function(film){
    filmDetails(film)
})
function filmDetails(film){
    const img = document.querySelector('#poster')
    img.src = film.poster

    const div = document.querySelector('#title')
    title.innerText = film.title

    const runDiv = document.querySelector('#runtime')
    runDiv.innerHTML = film.runtime

    const span = document.querySelector('#showtime')
    span.innerHTML = film.showtime

    const remainingTicket = document.querySelector('#ticket-num')
    remainingTicket.innerHTML = `${film.capacity - film.tickets_sold}`

    const infoDiv = document.querySelector('#film-info')
    infoDiv.innerText = film.description

    const buyTicket = document.querySelector('.ui.orange.button')
    

    
    buyTicket.addEventListener('click', function(e){


        let numTicket = parseInt(remainingTicket.innerHTML) - 1
        remainingTicket.innerHTML = `${numTicket}`
        

        fetch("http://localhost:3000/films/1",{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"

            },
            body: JSON.stringify({
                tickets_sold: ++film.tickets_sold  
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    })

}