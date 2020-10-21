document.addEventListener("DOMContentLoaded", () => {

    //initial fetch
    fetch("http://localhost:3000/films/1")
    .then(response => response.json())
    .then(movie => renderMovie(movie))

    //render movie to DOM
    const renderMovie = movie => {

        let title = document.querySelector('#title')
        title.innerText = movie.title
    
        let runtime = document.querySelector("#runtime")
        runtime.innerText = `${movie.runtime} minutes`
    
        let description = document.querySelector("#film-info")
        description.innerText = movie.description
    
        let showtime = document.querySelector("#showtime")
        showtime.innerText = movie.showtime
    
        let tickets = document.querySelector('#ticket-num')
        tickets.innerText = movie.capacity - movie.tickets_sold
    
        let poster = document.querySelector('#poster')
        poster.src = movie.poster

        //buy ticket feature
        let ticketButton = document.querySelector(".ui.orange.button")
        ticketButton.addEventListener("click", () => {
            let updatedTicketsSold = movie.tickets_sold + 1

            let patchOption = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    tickets_sold: updatedTicketsSold
                })
            }

            fetch("http://localhost:3000/films/1", patchOption)
            .then(response => response.json())
            .then(movie => renderMovie(movie))
        })

        //sold out feature
        if (movie.tickets_sold == movie.capacity) {
            ticketButton.className = "ui label"
            ticketButton.innerText = "Sold Out"
        }

    }

})