const url = "http://localhost:3000/films/1"

document.addEventListener('DOMContentLoaded', () => {
    // console.log('page loaded')
    fetch(url)
    .then(resp => resp.json())
    .then(movieData => renderMovie(movieData))

    function renderMovie(movie){
        let poster = document.querySelector("#poster")
        poster.src = movie.poster
        let title  = document.querySelector("#title")
        title.innerHTML = movie.title
        let runtime = document.querySelector("#runtime")
        runtime.innerHTML = `${movie.runtime} minutes`
        let showtime = document.querySelector("#showtime")
        showtime.innerHTML = movie.showtime
        let availTickets = document.querySelector("#ticket-num")
        ticketsLeft = (movie.capacity - movie.tickets_sold)
        availTickets.innerHTML = ticketsLeft

        let buyButton = document.querySelector(".ui.orange.button")
        // console.log(buyButton)
        buyButton.addEventListener('click', () => {
            
            // availTickets.innerHTML = ticketsLeft

            if (ticketsLeft == 0){
                let extraContent = document.querySelector(".extra.content")
                extraContent.innerText = 'sold out'
            }
            else{
                let newTickets = ++movie.tickets_sold
                ticketsLeft = (movie.capacity - movie.tickets_sold)
                availTickets.innerHTML = ticketsLeft
                fetch(url, {
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json",
                        "Accept":"application/json"
                    },
                    body: JSON.stringify({
                        "tickets_sold": newTickets
                    })
                })
                .then(resp => resp.json())
                .then(movie => console.log(movie))
            }
        })
    }    
   
})