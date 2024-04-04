import deleteOfList from "./delete.js";

import API from "./api.js";

export default class List {
  constructor() {
    //Select DOM elements // Seleciona elementos del DOM
    this.content = document.getElementById("content");
  }

  movieTemplate(movie) {
    return `
        <article class="movie-item" id="movie-${movie.id}">
            <h3 class="title">${movie.title.toUpperCase()}</h3>
            <div class="poster-container">
                <img id="poster-${movie.id}" class="poster" src="" style="display: none;">
                <button class="delete" data-id="${movie.id}">Delete</button>
            </div>
            <p class="description">${movie.description.toUpperCase()}</p>
        </article>`;
  }

  async addToList(movie, listOfMovies) {
    // Add the movie to the list // Añade la película al la lista.
    this.content.innerHTML += this.movieTemplate(movie);

    // Show movie list // Enseña la lista de películas.
    this.show(listOfMovies);
  }

  async displayPoster(posterUrl, movieId) {
    // Collect the Poster to the API// Recoge el póster de la API
    const posterElement = document.createElement("img");
    posterElement.src = posterUrl;
    posterElement.alt = "Movie Poster";
    posterElement.style.width = "150px";
    // Add poster element to movie container // Añade el poster de la película al "contenedor" principal de la app
    const movieContainer = document.getElementById(`movie-${movieId}`);
    if (movieContainer) {
      movieContainer.appendChild(posterElement);
    }
  }

  async show(movies) {
    // Empty DOM from movie container// Muestra el DOM vacío
    this.content.innerHTML = "";

    // Show all the movies in the storage// Muestra las películas en el "storage"
    for (let i = 0; i < movies.length; i++) {
      const movie = movies[i];
      this.content.innerHTML += this.movieTemplate(movie);

      // Recover poster URL from API and display poster
      try {
        const posterUrl = await API.fetchPosterUrl(movie.title);
        if (posterUrl) {
          this.displayPoster(posterUrl, movie.id);
        }
      } catch (error) {
        console.error("Error fetching and displaying poster:", error);
      }
    }

    // Delete button function// Llamada de la función que incluye el botoón de borrar de la lista.
    deleteOfList();
  }
}
