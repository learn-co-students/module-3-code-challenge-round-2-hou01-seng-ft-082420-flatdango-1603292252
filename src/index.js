const url = "http://localhost:3000/films/1"

document.addEventListener('DOMContentLoaded', () => {

    fetch(url)
    .then(res => res.json())
    .then(film => renderFilms(film))


    function renderFilms(film) {
        const poster = document.querySelector('img')
        poster.src = film.poster
        const title = document.querySelector('.title')
        title.innerText = film.title
        const runtime = document.querySelector('.meta')
        runtime.innerText = film.runtime
        const showtime = document.querySelector('#showtime')
        showtime.innerText = film.showtime
        const cap = `${film.capacity}`
        let ts = `${film.tickets_sold}`
        // console.log(cap,ts)
        const aTickets = document.querySelector('#ticket-num')
        aTickets.innerText = (cap - ts) 
        const buyTicketButton = document.querySelector('.button')
    
        buyTicketButton.addEventListener('click', function(e){
            ++ts
            aTickets.innerText = (cap - ts) 
            
    
            fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json",
                    "Accept" : "application/json"
                },
                body: JSON.stringify({
                    tickets_sold : ts
                })
            })
            .then(res => res.json())
            // .then(function(soldOut){
            //     if(aTickets = 0){
            //         document.querySelector('.button').disabled = true;
                
            //     }
            // })
        })
    }
})    