import Storage from "./storage.js";
import List from "./list.js";

export default function () {
    const storage = new Storage();
    const list = new List();

    let movies_stored = storage.getData();
    let movies_viewed = document.querySelectorAll(".movie-item");

    movies_viewed.forEach(movie => {
        let edit_btn = movie.querySelector(".edit");

        edit_btn.onclick = function () {
            // Catch movie id
            const movie_id = parseInt(this.getAttribute("data-id"));

            // Buttons remove
            edit_btn.remove();
            movie.querySelector(".delete").remove();

            // Add html to the edit
            let movie_edit_html = `
            <div class= "edit_form">
                 <h3 class="title">Edit movie </h3>
                 <form>
                 <input type="text" class="edited_title" value="${movie.querySelector(".title").innerHTML}"/>
                 <textarea class="edited_description">${movie.querySelector(".description").innerHTML} </textarea>
                 <input type="submit" class="update" value="Update"></input>
                 </form>
            </div>`;
            movie.innerHTML += movie_edit_html;

            let update_btn = movie.querySelector(".update");

            update_btn.onclick = function (e) {
                e.preventDefault();

                let index = movies_stored.findIndex(peli => peli.id === movie_id);

                movies_stored[index] = {
                    id: movie_id,
                    title: movie.querySelector(".edited_title").value,
                    description: movie.querySelector(".edited_description").value
                };

                // Save to storage
                storage.save(movies_stored);

                // Show list again
                list.show(movies_stored);

                return false;
            };
        };
    });
}
