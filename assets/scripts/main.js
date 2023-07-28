const button = document.querySelector('.btn')
let displayMovies = document.querySelector('.display')

async function fetchData () {
  const inputSearch = document.querySelector('.input').value
  const url = `http://www.omdbapi.com/?s=${inputSearch}&apikey=80b18414`

  await fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      let movies = data.Search
      displayMovies.innerHtml = movies.map((movie, index) => {
        return `<div class="movie" key=${index}>
                  <img src="${movie.Poster}" alt="movies" />
                  <h3 class="title">${movie.Title}</h3>
                  <h3>${movie.Year}</h3>
                  <a href="#" class="a-tag">Movie details</a>
                </div>`;
      });
      // displayMovies.innerHtml = mappedMovies
      
    }) 
    .catch((err) => {
      console.log(err)
    })
  console.log(inputSearch)

}

button.addEventListener('click', fetchData)