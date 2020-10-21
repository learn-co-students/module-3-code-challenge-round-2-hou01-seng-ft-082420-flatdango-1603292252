const URLBase = "http://localhost:3000/films/1"

document.addEventListener('DOMContentLoaded', () => {
    console.log('HTML is loaded!')

    fetch(URLBase).then(res => res.json()).then(json => {createCard(json)});

    function createCard(film) {
        //poster, title, runtime, description, capacity, showtime, tickets_sold
        const image = document.querySelector('#poster')
        image.src = film.poster

        const title = document.querySelector('#title')
        title.innerText = film.title

        const runtime = document.querySelector('#runtime')
        runtime.innerText = `${film.runtime} Mins`

        const description = document.querySelector('#film-info')
        description.innerText = film.description

        const showtime = document.querySelector('#showtime')
        showtime.innerText = film.showtime

        //grab capacity and subtract it from the tickets sold
        // const capacity = film.capacity
        // console.log(capacity)
        // const ticketsSold = document.querySelector('#ticket-num')
        
        let capacity = film.capacity
        let ticketsSold = film.tickets_sold
        // console.log(ticketsSold)
        let remainingTickets = capacity - ticketsSold
        // console.log(remainingTickets)
        let DOMtickets = document.querySelector('#ticket-num')
        DOMtickets.innerText = remainingTickets
        
        // buy ticket
        const btn = document.querySelector('#purchase-button')
        //create event listener for btn
        btn.addEventListener('click', e => {

            let ticketsLeft = DOMtickets.innerText - 1
            // console.log(ticketsLeft)
            fetch("http://localhost:3000/films/1", {
                method: "PATCH",
                headers: {
                    "Content-Type": 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    'tickets_sold': ++ticketsSold 
                    // increase the tickets sold
                
                })
            })
            .then(res => res.json())
            .then(function (editedTickets){
                if(tickets_sold = 30){
                    // btn.innerText = "SOLD OUT!"
                    DOMtickets.innerText = "SOLD OUT!"
                }
            })
            
        })
    }
});//end of DOMContentLoaded