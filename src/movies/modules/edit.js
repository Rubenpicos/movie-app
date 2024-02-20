import Storage from "./storage.js";
import List from "./list.js";

export default function () {
    const storage = new Storage();
    const list = new List();

    let movies_stored = storage.getData();
    let movies_viewed = document.querySelectorAll(".movie-item");

    movies_viewed.forEach(movie => {
        // Eliminar el botón de edición
        const editBtn = movie.querySelector(".edit");
        if (editBtn) {
            editBtn.remove();
        }

        // Centrar el botón de eliminación
        const deleteBtn = movie.querySelector(".delete");
        if (deleteBtn) {
            deleteBtn.style.textAlign = "center";
        }
    });
}
