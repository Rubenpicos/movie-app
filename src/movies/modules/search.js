import TheStorage from "./storage.js";
import Thelist from "./list.js";




export default function(){
    //create obj
    const searchStorage = new TheStorage();
    const searchList = new Thelist();
    // Get the movies (DOM)

    let content = document.querySelector("#content")
    let searchBtn= document.querySelector("#search")
    // Event aply
    searchBtn.onclick = (e) =>{
        e.preventDefault();


        
    // Get the text entered in the search
        let wanted = document.querySelector("#search_field").value;
    // Get actu movie data
        let moviesStored = searchStorage.getData();

    // Filter
        const newMovie = moviesStored.filter(movie => {
            return movie.title.toLowerCase().includes(wanted.toLowerCase());
        });

            console.log(newMovie)
    //Show the coincidences
        if(newMovie.length <= 0){
            content.innerHTML = "<div><h2>No concidences</h2></div>"
        }else{
    searchList.show(newMovie)
        }

        
        return false 
    }

}