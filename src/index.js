// First Deliverable  Done 

const url = "http://localhost:3000/films/1"

fetch(url)
  .then(res => res.json())
  .then(details => {
    //  console.log(data)
    getMovie(details)
  })

  function getMovie(details){
     const img = document.querySelector('#poster')
     img.src = details.poster 
    //  console.log(img )

    const title = document.querySelector('#title')
    title.innerText = details.title   

    // console.log(title)

    const runTime = document.querySelector('#runtime')
    runTime.innerText = `${details.runtime}  minutes`

    const showTime = document.querySelector('#showtime')
    showTime.innerText = details.showtime 

    // const filmInfo = document.querySelector('#film-info')
    // filmInfo.innerText = details.description 

    let remaingTickets = details.capacity - details.tickets_sold 
    const avilableTickets = document.querySelector('#ticket-num')
    avilableTickets.innerText = remaingTickets 
 

  }
 
  // Second Deliverable  not done 

  // Buy a ticket for a movie. The number of tickets sold for that movie should be persisted, and I should be able to see the number of available tickets decreasing on the frontend.
  // const buyTicket = document.querySelector('.ui orange button')
  // buyTicket.addEventListener('click', e => {
    
  //   fetch(url, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },

  //     body: JSON.stringify({


  //     })



  //   })
    

  // })

  
  



  //  Third Deliverable not done 
  // I should not be able to buy a ticket if the showing is sold out.
  // const  buyTicket = document.querySelector('.ui orange button')
  // buyTicket.addEventListener('click', ()=> {
    
    
  // })
 
   
   
  //  if (tickets.capacity === tickets.tickets_sold) {
      

  //  }


   
   // fetch(url)
  // .then(res => res.json())
  // .then(tickets => {
  //   soldOut(tickets)
     
  // })
   
  // function soldOut(tickets)
  //  if (tickets.capacity === tickets.tickets_sold) {
      

  //  }