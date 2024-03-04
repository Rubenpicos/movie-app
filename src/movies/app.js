import Add from "./modules/add.js";
import list from "./modules/list.js";
import storage from "./modules/storage.js";
import search from "./modules/search.js";

export default class App {
  constructor() {
    //start props

    this.add = new Add();
    this.list = new list();
    this.storage = new storage();
  }

  load() {
    //add movies
    this.add.movieSave();
    //
    const movies = this.storage.getData();
    //list movies
    this.list.show(movies);
    //Search movies

    search();
  }
}
