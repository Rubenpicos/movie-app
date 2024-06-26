import Storage from "./storage.js";
import List from "./list.js";

export default function () {
  const storageInstance = new Storage();
  const listInstance = new List();

  let moviesStorage = storageInstance.getData();
  let moviesViewed = document.querySelectorAll("#content .movie-item");

  moviesViewed.forEach((movie) => {
    let deleteBtn = movie.querySelector(".delete");

    deleteBtn.onclick = function () {
      const movie_id = this.getAttribute("data-id");

      // Remove poster from storage // Borra el poster del "storage"
      localStorage.removeItem(`poster-${movie_id}`);

      // Remove movie from storage // Borra la película del "storage"
      const new_movie_stored = moviesStorage.filter(
        (movie) => movie.id !== parseInt(movie_id),
      );

      // Update storage // Actualiza el "storage"
      storageInstance.save(new_movie_stored);

      // Update movie list// Actualiza la lista de películas
      listInstance.show(new_movie_stored);
    };
  });
}
