import Add from "./modules/add.js";
import list from "./modules/list.js";
import storage from "./modules/storage.js";
import search from "./modules/search.js";

export default class App {
  constructor() {
    //Start props // Activa los props

    this.add = new Add();
    this.list = new list();
    this.storage = new storage();
  }

  load() {
    //Add movies //Añade las películas
    this.add.movieSave();
    //
    const movies = this.storage.getData();
    //List movies // Lista las películas
    this.list.show(movies);
    //Search movies// Busca las películas

    search();
  }
}
