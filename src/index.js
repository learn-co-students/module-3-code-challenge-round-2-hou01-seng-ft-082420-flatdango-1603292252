const url = "http://localhost:3000/films"

document.addEventListener("DOMContentLoaded", () => {
       console.log("contentloaed")

       fetch(url)
       .then(res => res.json())
       .then(films => films.forEach(film => {
           renderFilm(film)
       }))
    


       function renderFilm(film){
           
           const div = document.querySelector("#films")
           
           //const div = document.createElement("div")
           //div.className = "film item"
           
           const h1 =document.createElement("h1")
           h1.innerText = film.title
           //console.log(title)
           h1.addEventListener("click", (e)=>{
               showInfo(film)
               console.log("clicke")
           })

           
           
           div.append(h1)
        }
        function showInfo(film){
            const div  = document.querySelector("#title")
            div.innerHTML=""
            

            const span = document.createElement("span")
            span.innerText = film.title

            const run = document.querySelector("#runtime")
            run.innerhtml=""
            run.innerText = film.runtime

            const show = document.querySelector("#showtime")
            show.innerText= film.showtime

            const des =document.querySelector(".description")
            des.innerText = film.description

            //const ticket = document.getElementById("#ticket-num")
            //ticket.innerText = film.tickets_sold

            //const button = document.querySelector(".ui orange button")
            //button.innerText = film.tickets_sold
            //button.addEventListener("click",(e) =>{
               
                  //showInfo(film)   
               

            //})
 
            div.append(span,run,show,des)
            //des.append(ticket)
            //span.append(run)


            
            
        }
    })
        