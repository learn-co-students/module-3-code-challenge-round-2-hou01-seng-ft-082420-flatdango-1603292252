const url = "http://localhost:3000/films"


document.addEventListener('DOMContentLoaded', () =>{

    fetch(url)
    .then(res => res.json())
    .then(data => renderMovie(data))

})
const renderMovie = (data) => {
    const movies = document.querySelector('.filmitem')
    const ul = document.createElement('ul')
    for(let i = 0; i<data.length; i++){
        const li = document.createElement('li')
        li.innerText = data[i].title
        
        ul.append(li)
        movies.append(ul)
    
        const imgbox = document.querySelector('.four wide column')
        const img = document.querySelector('#poster')
        img.src = data[i].poster

        const title = document.querySelector('#title')
        title.innerText = data[i].title

        const runtime = document.querySelector('#runtime')
        runtime.innerText = data[i].runtime

        const movDisc = document.querySelector('#film-info')
        movDisc.innerText = data[i].description

        const showTime = document.querySelector('#showtime')
        showTime.innerText = data[i].showtime

        const span = document.querySelector('#ticket-num')
        span.innerText = data[i].capacity - data[i].tickets_sold

        const buyBtn = document.querySelector('.ui.orange.button')
        buyBtn.addEventListener ('click', () => {
            //check to make sure there is some tickets remaining if so do not allow them to buy one
            fetch('http://localhost:3000/films/1',{
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    //decrease the number of remaning tickets by one
                    tickets_sold: data.capacity - (data.tickets_sold + 1)
                    

                })
            })
            .then(res => res.json())
            .then(data => renderMovie(data))

        })
    }

}