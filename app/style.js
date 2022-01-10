const movies = [{
    movieName: 'Spider Man',
    movieYear: 1998,
    movieGenre: 'Cattoon',
}, {
    movieName: 'Chindrella',
    movieYear: 2000,
    movieGenre: 'Cattoon'
}
];

for (let movie of movies) {

    addToMovieList(movie);
}



const addMovieform= document.querySelector("#addMovieform");

addMovieform.addEventListener("submit", function(event){
    event.preventDefault();

    const formData =new FormData(event.target);
    const movieName= formData.get("movieName");
    const movieYear= formData.get("movieYear");
    const movieGenre= formData.get("movieGenre");
    
    const movie = {
        movieName,
        movieYear,
        movieGenre,
    }

    movies.push(movie);

    addToMovieList(movie);

    event.target.reset();
});

function addToMovieList(movie) {
console.log('==> ', movie);

const div=document.createElement("div");
div.classList.add("movie");

const h2=document.createElement("h2");
h2.textContent=movie.movieName;
div.appendChild(h2);

const h3= document.createElement("h3");
h3.textContent=movie.movieYear;
div.appendChild(h3);

const p=document.createElement("p");
p.textContent = movie.movieGenre;
div.appendChild(p);

const delbut =document.createElement("button");
delbut.textContent="delete";

div.appendChild(delbut);

document.getElementById("movie-list").append(div);

}


