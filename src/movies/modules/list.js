
import deleteOfList from "./delete.js"
import edit from "./edit.js"

export default class list {
    constructor() {
        //DOM ELEMENTS

        this.content = document.querySelector("#content")
    }


    movieTemplate(movie){
        return `
        <article class="movie-item" id="movie-${movie.id}">
            <h3 class="title">${movie.title}</h3>
            <p class="description">${movie.description}</p>
    
            <button class="edit" data-id="${movie.id}">Edit</button>
            <button class="delete" data-id="${movie.id}">Delete</button>
        </article> `
    }

    addToList(movie, listOfMovies) {

        //TEMPLATE 
        let movieHTML = this.movieTemplate(movie)

    //Add the movie to DOM
    this.content.innerHTML += movieHTML

    //Show movie list
    this.show(listOfMovies);
    }

    show(movies){
        //Empty DOM from movie container
        this.content.innerHTML = "";

        //Show all the movies in the localStorage
        movies.forEach(movie => {
            this.content.innerHTML += this.movieTemplate(movie);
            
        });

            // Delete button
            deleteOfList();

            //Edit button
            edit();
    }


}