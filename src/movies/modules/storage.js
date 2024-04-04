export default class storage {
  constructor() {
    this.id = 1;
  }

  getData() {
    let movies = JSON.parse(localStorage.getItem("movies"));
    //Conditional for show movies//Condicional para mostrar películas
    if (!movies || movies.length < 1) {
      this.id = 1;
    } else {
      this.id = movies[movies.length - 1].id + 1;
    }
    return movies;
  }
  //Select the last io for the movies// Seleciona el id de la película para mostrarla
  getLastId() {
    return this.id;
  }
  //Save to storage// Guarda el resultado en el "storage"
  save(data) {
    localStorage.setItem("movies", JSON.stringify(data));
  }
}
