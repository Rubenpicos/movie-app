import storage from "./storage.js";
import list from "./list.js";


export default class Add {

    constructor() {

        //
        this.storage = new storage();
        this.list = new list();

        //Catch DOM elements
        this.titleField = document.querySelector("#title");
        this.descriptionField = document.querySelector("#description");
        this.save_btn = document.querySelector("#save")
    }


    movieSave() {

        this.save_btn.onclick = (e) => {
            e.preventDefault();

            //
           let movies = this.storage.getData();
           let lastId = this.storage.getLastId();
           console.log(movies, lastId)
           

            let title = this.titleField.value;
            let description = this.descriptionField.value

            if (title != "" || description != "") {
                
                //Create
                let movie = {
                    id: lastId++,
                    title,
                    description
                }

                //ADD MOVIES
                movies.push(movie);

                //SAVE IN STORAGE
                this.storage.save(movies);
                //List actu
                this.list.addToList(movie, movies);
            } else {
                alert("Enter data in the form")

            }






            return false;
        }

    }
}