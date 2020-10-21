const url = "http://localhost:3000/films/1"

document.addEventListener("DOMContentLoaded", e => {
    // console.log("hi")
    fetch(url).then(res => res.json()).then(movie => createMovie(movie))

    function createMovie(movie){
        console.log(movie)
        const img = document.querySelector("#poster")
        img.src = movie.poster 

        const div = document.querySelector("#title")
        div.setAttribute("class", "title")
        div.innerText = movie.title

        const divMinutes = document.querySelector("#runtime")
        divMinutes.setAttribute("class", "meta")
        divMinutes.innerText = movie.runtime

        const divDescription = document.querySelector("#film-info")
        divDescription.innerText = movie.description 

        const span = document.querySelector("#showtime")
        span.setAttribute("class", "ui label")
        span.innerText = movie.showtime 

        const tickets = document.querySelector("#ticket-num")
        tickets.innerText = movie.capacity - movie.tickets_sold

        const button = document.querySelector(".button")

        button.addEventListener("click", e => {
            e.preventDefault()
            const newTickets = ++movie.tickets_sold
            fetch(url, {
                method:"PATCH",
                headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            },
            body: JSON.stringify({
                tickets_sold: newTickets 
            })
            }) 
            .then(res => res.json())
            .then(movie => tickets.innerText = movie.capacity - movie.tickets_sold)
            
            

        })

    }


})