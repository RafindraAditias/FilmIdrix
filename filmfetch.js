// const searchButton = document.querySelector(".search-button");
// searchButton.addEventListener("click", function () {
//   const inputKeyword = document.querySelector(".input-keyword");
//   fetch("http://www.omdbapi.com/?apikey=f1cfb7b2&s=" + inputKeyword.value)
//     .then((response) => response.json())
//     .then((response) => {
//       const movies = response.Search;
//       let cards = "";
//       movies.forEach((m) => (cards += showCards(m)));
//       const movieContainer = document.querySelector(".movie-container");
//       movieContainer.innerHTML = cards;

//       const modalDetailButton = document.querySelectorAll(".modal-detail-button");
//       modalDetailButton.forEach((btn) => {
//         btn.addEventListener("click", function () {
//           const imdbid = this.dataset.imdbid;
//           fetch("http://www.omdbapi.com/?apikey=f1cfb7b2&i=" + imdbid)
//             .then((response) => response.json())
//             .then((m) => {
//               const movieDetails = moviesDetails(m);
//               const modalBody = document.querySelector(".modal-body");
//               modalBody.innerHTML = movieDetails;

//             });
//         });
//       });
//     });
// });

// CONTOH ASYCN AWAIT
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function(){
  const inputKeyword = document.querySelector('.input-keyword');
  const movis = await getMovies(inputKeyword.value);
  UpdateUI(movis)
})

document.addEventListener('click', async function(e){
  if(e.target.classList.contains('modal-detail-button')){
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid)
    updateUIDetail(movieDetail)
  }
})

function getMovieDetail(imdbid){
  return fetch('http://www.omdbapi.com/?apikey=f1cfb7b2&i=' + imdbid)
  .then(response => response.json())
  .then(m => m)
}

function updateUIDetail(m){
  const movieDetails = moviesDetails(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetails;
}

function getMovies(keyword){
  return fetch("http://www.omdbapi.com/?apikey=f1cfb7b2&s=" + keyword)
  .then(response => response.json())
  .then(response => response.Search)
}

function UpdateUI(movies){
  let cards = '';
  movies.forEach(m => cards += showCards(m));
  const movieContainer = document.querySelector('.movie-container')
  movieContainer.innerHTML = cards
}

function showCards(m) {
  return `<div class="col-md-4 my-5">
    <div class="card">
    <img src="${m.Poster}" class="card-img-top" />
    <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">SHOW DETAILS</a>
    </div>
    </div>
</div>`;
}

function moviesDetails(m) {
  return `<div class="container-fluid">
    <div class="row">
        <div class="col-md-3">
            <img src="${m.Poster}" alt="" class="img-fluid">
        </div>
        <div class="col-md">
            <ul class="list-group">
            <h4>${m.Title} ${m.Year}</h4>
                <li class="list-group-item">Director : ${m.Diretor}</li>
                <li class="list-group-item">Actors : ${m.Actors}</li>
                <li class="list-group-item">Writer : ${m.Writer}</li>
                <li class="list-group-item">Plot : ${m.Plot}</li>
            </ul>
        </div>
    </div>
</div>`;
}

// const searchButton = document.querySelector(".search-button");
// searchButton.addEventListener("click", function () {
//   const inputKeyword = document.querySelector(".input-keyword");
//   fetch("http://www.omdbapi.com/?apikey=f1cfb7b2&s=" + inputKeyword.value)
//     .then((response) => response.json())
//     .then((response) => {
//       const movies = response.Search;
//       let cards = "";
//       movies.forEach((m) => (cards += showCards(m)));
//       const movieContainer = document.querySelector(".movie-container");
//       movieContainer.innerHTML = cards;

// const modalButton = document.querySelectorAll(".modal-detail-button");
// modalButton.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     const imdbid = this.dataset.imdbid;
//     fetch("http://www.omdbapi.com/?apikey=f1cfb7b2&i=" + imdbid)
//       .then((response) => response.json())
//       .then((m) => {
//         const moviesDetail = moviesDetails(m);
//         const modalBody = document.querySelector(".modal-body");
//         modalBody.innerHTML = moviesDetail;
//       });
//   });
// });
