import TheStorage from "./storage.js";
import Thelist from "./list.js";

export default function () {
  const searchStorage = new TheStorage();
  const searchList = new Thelist();

  let content = document.querySelector("#content");
  let searchBtn = document.querySelector("#search");
  //  Apply click event  in the seach // Aplica el evento de click en el buscador
  searchBtn.onclick = (e) => {
    e.preventDefault();

    // Get the text entered in the search// Recoge el texto del campo del buscador de peliculas.
    let wanted = document.querySelector("#search_field").value;
    // Get actu movie data // Actualización del "storage".
    let moviesStored = searchStorage.getData();

    // Filter to
    const newMovie = moviesStored.filter((movie) => {
      return movie.title.toLowerCase().includes(wanted.toLowerCase());
    });

    console.log(newMovie);
    //Show the coincidences or the error// Muestra el resultado de la búsqueda o un error.
    if (newMovie.length <= 0) {
      content.innerHTML = "<div><h2>No concidences</h2></div>";
    } else {
      searchList.show(newMovie);
    }

    return false;
  };
}
