const button = document.querySelector('.btn');
const displayMovies = document.querySelector('.display');

async function fetchData() {
  const inputSearch = document.querySelector('.input').value;
  const url = `http://www.omdbapi.com/?s=${inputSearch}&apikey=80b18414`;

  await fetch(url)
    .then((response) => response.json())
    .then(({ Search }) => {
      console.log(Search);
      displayMovies.innerHTML = Search.map((movie, index) => {
        return `<div class="movie" key=${index}>
            <img src=${movie.Poster} alt="movies" />
            <h3 class="title">${movie.Title}</h3>
            <h3>${movie.Year}</h3>
            <a onclick="selectedMovie('${movie.imdbID}')" href="#" class="a-tag">Movie details</a>
          </div>`;
      });
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(inputSearch);
}
button.addEventListener('click', fetchData);

const getMovie = async () => {
  let movieId = JSON.parse(localStorage.getItem('movieId'))
  
  const url = `http://www.omdbapi.com/?i=${movieId}&apikey=80b18414`;

  await fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log('An error occured', error))
  // const response = await fetch(url)
  // const movie = await response.json()
  

}

const selectedMovie = (id) => {
  localStorage.setItem('movieId', JSON.stringify(id))
  console.log(id)
}

const displayMovie = async() => {
  // const inputSearch = document.querySelector('.input').value;
  const url = `http://www.omdbapi.com/?s=scorpion&apikey=80b18414`;

  await fetch(url)
    .then((response) => response.json())
    .then(({ Search }) => {
      console.log(Search);
      document.querySelector('.content').innerHTML = Search.map((movie, index) => {
        return `<div class="movie" key=${index}>
            <img src=${movie.Poster} alt="movies" />
            <h3 class="title">${movie.Title}</h3>
            <h3>${movie.Year}</h3>
            <a onclick="selectedMovie('${movie.imdbID}')" href="#" class="a-tag">Movie details</a>
          </div>`;
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
