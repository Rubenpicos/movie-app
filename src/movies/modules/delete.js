
import Storage from "./storage.js";
import List from "./list.js";

export default function () {


    const storageInstance = new Storage()
    const listInstance = new List()

    let moviesStorage = storageInstance.getData();
    let moviesViewed = document.querySelectorAll("#content .movie-item")

    moviesViewed.forEach(movie => {


        let deleteBtn = movie.querySelector('.delete');

        deleteBtn.onclick = function () {
            const movie_id = this.getAttribute('data-id')

            const new_movie_stored = moviesStorage.filter((movie) => movie.id !== parseInt(movie_id));

            //Actu localStorage
            storageInstance.save(new_movie_stored);
            //show the list again
            listInstance.show(new_movie_stored)
        }
    })

}