    const url = "http://localhost:3000/films/1"


    fetch(url).then(res => res.json()).then(film =>{
    renderFilm(film) 
    })


    function renderFilm(film) {

    const img = document.querySelector("#poster")
        img.src = film.poster

     const title = document.querySelector("#title")
    title.innerText = film.title

    const runtime = document.querySelector("#runtime")
    runtime.innerText = `${film.runtime} minutes`

    const showtime = document.querySelector("#showtime")
        showtime.innerText = film.showtime


    const des = document.querySelector("#film-info")
        des.innerText = film.description

        // console.log(film.capacity)
        let tickSold = film.tickets_sold
        let capacity = film.capacity

    //  let remaining = (parseInt(capacity) - parseInt(tickSold))
       // console.log(remaining)
     const ticks = document.querySelector("#ticket-num")
        ticks.innerText = (capacity - tickSold)

        //const Sold = (parseInt(film.capacity) == parseInt(tickSold)
        

        // if ((parseInt(film.capacity) == parseInt(tickSold))) {
        //     buybtn.innerText = "SOLD OUT" 
        // } else {
        //     buybtn.innerText = "BUY TICKET"
        // }

        const butDiv = document.querySelector(".extra.content")
    //PATCH

    const buybtn = document.querySelector(".ui.orange.button")
        //console.log(buybtn)
        buybtn.addEventListener("click", event => {
            event.preventDefault()

            let newTick = (tickSold) +  1
            if (capacity > tickSold) {

                fetch(url, {
                    method : "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
        
                    },
                    body: JSON.stringify ({
                        "tickets_sold" : newTick 
                    })
                
                }).then(res => res.json()).then(newtick => (newtick = film.tickets_sold)).then(ticks.innerText - 1)
                
            } else {
                butDiv.innerText = "SOLD OUT"
            }
            
                
        })


    }

    

