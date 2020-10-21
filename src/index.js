const url = "http://localhost:3000/films/1"
document.addEventListener("DOMContentLoaded", function(){
    fetch(url)
    .then(res => res.json())
    .then(function(film){
        renderFilm(film)
    })
    
    function renderFilm(film){
        
        // see poster, title, runtime, showtime, and available tickets
        const div = document.querySelector('.four wide column')
        const img = document.querySelector('#poster')
        img.src = film.poster
        console.log(img)

        
        const card = document.querySelector('.card')
        // title
        const title = document.querySelector('.title')
        title.innerText = film.title
        
        //runtime
        const runtime = document.querySelector('.meta')
        runtime.innerText = film.runtime

        //film-info

        const info = document.querySelector('#film-info')
        info.innerText = film.description

        // showtime
        const showtime = document.querySelector('#showtime')
        showtime.innerText = film.showtime

        // remaining ticket 
        const remainticket = document.querySelector('#ticket-num')
        let a = film.capacity
        let b = film.tickets_sold
        let c = a - b 
        remainticket.innerText = `${c} remaining tickets`

        //buyBtn

        const buyBtn = document.querySelector(".ui.orange.button")
        buyBtn.addEventListener("click", function(e){
            e.preventDefault()
            //set if left ticket = 0 or ticket_sold = 30, then hide the Buy ticket option
            // let extracon = document.querySelector(".extra.content")
            // if (b = 30){
            //     extracon.innerHTML = ""

            // } else {

            // }

            let leftticket = parseInt(remainticket.innerText) - 1
                

            let b = film.tickets_sold +1
            console.log(leftticket)
            

            fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    tickets_sold: b
                })
            })
            .then(res => res.json())
            .then(updateticket => remainticket.innerText = leftticket)
        })







        





    }

})