import deleteOfList from "./delete.js";
import edit from "./edit.js";
import API from "./api.js";

export default class List {
    constructor() {
        // DOM ELEMENTS
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
        // Add the movie to DOM
        this.content.innerHTML += this.movieTemplate(movie);

        // Show movie list
        this.show(listOfMovies);

        try {
            // Fetch poster URL
            const posterUrl = await API.fetchPosterUrl(movie.title);

            // Save poster URL to localStorage
            localStorage.setItem(`poster-${movie.id}`, posterUrl);

            // Display poster
            if (posterUrl) {
                this.displayPoster(posterUrl, movie.id);
            }
        } catch (error) {
            console.error('Error fetching and displaying poster:', error);
        }
    }

    displayPoster(posterUrl, movieId) {
        // Create poster element
        const posterElement = document.createElement('img');
        posterElement.src = posterUrl;
        posterElement.alt = 'Movie Poster';
        posterElement.style.width = '150px';
        // Add poster element to movie container
        const movieContainer = document.getElementById(`movie-${movieId}`);
        if (movieContainer) {
            movieContainer.appendChild(posterElement);
        }
    }



    show(movies) {
        // Empty DOM from movie container
        this.content.innerHTML = "";
    
        // Show all the movies in the localStorage except the last one
        for (let i = 0; i < movies.length - 1; i++) {
            const movie = movies[i];
            this.content.innerHTML += this.movieTemplate(movie);
    
            // Retrieve poster URL from localStorage and display poster
            const posterUrl = localStorage.getItem(`poster-${movie.id}`);
            if (posterUrl) {
                this.displayPoster(posterUrl, movie.id);
            }
        }
    
        // Show the last movie in the list separately
        const lastMovie = movies[movies.length - 1];
        this.content.innerHTML += this.movieTemplate(lastMovie);
    
        // Retrieve poster URL from localStorage and display poster
        const lastPosterUrl = localStorage.getItem(`poster-${lastMovie.id}`);
        if (lastPosterUrl) {
            this.displayPoster(lastPosterUrl, lastMovie.id);
        }
    
        // Delete button
        deleteOfList();
    
        // Edit button
        edit();
    }
}
    
