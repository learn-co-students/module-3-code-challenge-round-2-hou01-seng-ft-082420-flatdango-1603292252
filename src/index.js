
//there is a bunch on negetive one but it stops at 0 


const url = "http://localhost:3000/films/"

document.addEventListener('DOMContentLoaded', () => {

    fetch("http://localhost:3000/films")
        .then(response => response.json())
        .then(moviesData => renderMovies(moviesData))
})

const renderMovies = (moviesData) => {

    const titles = document.querySelector('.film-Item')
    const ul = document.createElement('ul')
    for(let i = 0; i < moviesData.length; i++){

        // const ul = document.createElement('ul')
        // ul.id = 'movieList'

        const li = document.createElement('li')
        li.innerHTML = moviesData[i].title
        li.id = moviesData[i].id
        li.addEventListener('click', () => {
            renderInfo(moviesData[i])
        })
        ul.append(li)
    }
    titles.append(ul)
        
}
const renderInfo = (movieData) => {

    const poster = document.querySelector('#poster')
    poster.src = movieData.poster

    const title = document.querySelector('#title')
    title.innerHTMl = movieData.title

    const runtime = document.querySelector('#runtime')
    runtime.innerHTML = movieData.runtime

    const description = document.querySelector('#film-info')
    description.innerHTML = movieData.description

    const showtime = document.querySelector('#showtime')
    showtime.innerHTML = movieData.showtime

    const ticketNum = document.querySelector('#ticket-num')
    ticketNum.innerHTML = movieData.capacity - movieData.tickets_sold

    const buyTicket = document.querySelector('.ui.orange.button')

    buyTicket.addEventListener('click', () =>{
        const id = movieData.id
        console.log(id)
        //console.log(movieData.capacity, movieData.tickets_sold)
        const ticketsLeft = document.querySelector('#ticket-num')
        if (movieData.capacity - (movieData.tickets_sold + 1) >= 0){
            let patchOptions = {
                method: 'PATCH', 
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    tickets_sold: ++movieData.tickets_sold
                })
            }
            fetch(`http://localhost:3000/films/${id}`, patchOptions)
                .then(response => response.json())
                .then(movieData => {
                    ticketsLeft.innerHTML = movieData.capacity - movieData.tickets_sold
                    console.log(movieData)
                })
        }
    })
}
