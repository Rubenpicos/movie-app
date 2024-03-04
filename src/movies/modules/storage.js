export default class storage {
  constructor() {
    this.id = 1;
  }

  getData() {
    let movies = JSON.parse(localStorage.getItem("movies"));

    if (!movies || movies.length < 1) {
      movies = [
        // {
        //     id:0,
        //     title: '',
        //     description: ''
        // }
      ];
      this.id = 1;
    } else {
      this.id = movies[movies.length - 1].id + 1;
    }
    return movies;
  }

  getLastId() {
    return this.id;
  }

  save(data) {
    localStorage.setItem("movies", JSON.stringify(data));
  }
}
