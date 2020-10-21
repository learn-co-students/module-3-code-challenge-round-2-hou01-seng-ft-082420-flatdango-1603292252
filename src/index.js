// const movieUrl = "http://localhost:3000/films/1"

// fetch(movieUrl)
// .then(function(res){
//   return res.json()
// })
// .then(function(murl){
//   movieposter(murl)
// })


// function movieposter(url){
//   console.log(url)
//   const title = document.querySelector("#title")
//   title.textContent = url.title

//   const runtime = document.querySelector("#runtime")
//   runtime.textContent = url.runtime +" minutes"

//   const info = document.querySelector("#film-info")
//   info.textContent = url.description

//   const showtime = document.querySelector("#showtime")
//   showtime.textContent = url.showtime

//   const ticket = document.querySelector("#ticket-num")
//   ticket.textContent = (url.capacity - url.tickets_sold)

//   const poster = document.querySelector("#poster")
//   poster.src = url.poster

//   const butt = document.querySelector(".ui.orange.button")
//   console.log(butt)
//   butt.addEventListener("click" , function(a){
//     console.log(a)
//     a.preventDefault()
//   if(url.tickets_sold < url.capacity ){
//     fetch(movieUrl,{
//       method: 'PATCH',
//       headers:{
//         "Content-type":"application/json",
//         "Accept":"application/json"
//       },
//       body: JSON.stringify({
//         "tickets_sold": ++url.tickets_sold
//       })
//     })
//     ticket.textContent = (url.capacity - url.tickets_sold)
//   }else{alert("Tickets are sold out")}
  
// })}













const movieUrl = "http://localhost:3000/films/1"

fetch(movieUrl)
.then(function(res){
  return res.json()
})
.then(function(murl){
  movieposter(murl)
})


function movieposter(url){
  // console.log(url)
  const title = document.querySelector("#title")
  title.textContent = url.title

  const runtime = document.querySelector("#runtime")
  runtime.textContent = url.runtime +" minutes"

  const info = document.querySelector("#film-info")
  info.textContent = url.description

  const showtime = document.querySelector("#showtime")
  showtime.textContent = url.showtime

  const ticket = document.querySelector("#ticket-num")
  ticket.textContent = (url.capacity - url.tickets_sold)

  const poster = document.querySelector("#poster")
  poster.src = url.poster

  const butt = document.querySelector(".ui.orange.button")
  // console.log(butt)
  butt.addEventListener("click" , function(a){
    // console.log(a)
    a.preventDefault()
  if(url.tickets_sold < url.capacity ){
    fetch(movieUrl,{
      method: 'PATCH',
      headers:{
        "Content-type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        "tickets_sold": ++url.tickets_sold
      })
    })
    ticket.textContent = (url.capacity - url.tickets_sold)
  }else{alert("Tickets are sold out")}
  
})}













const moviesUrl = "http://localhost:3000/films"

fetch(moviesUrl)
.then(function(res){
  return res.json()
})
.then(function(msurl){
  for (i = 0; i < msurl.length; i++) {
    moviesposter(msurl[i])
  }
})

function moviesposter(m){
  console.log(m.title)
  const list = document.querySelector("#films")

  const li = document.createElement("div")
  li.className = "film item"
  li.innerText = m.title

  list.append(li)

  // li.addEventListener("click", function(a){

  // })
}