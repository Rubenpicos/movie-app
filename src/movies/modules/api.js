export default class API {
  static async fetchPosterUrl(movieTitle) {
    try {
      const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=2ba09122096fd3f68677ed55fd74b8a3&query=${encodeURIComponent(movieTitle)}`;
      const response = await fetch(apiUrl);

      if (response.ok) {
        const data = await response.json();
        // Return the poster of the first movie found // Devuelve el póster de la primera película encontrada
        if (data.results && data.results.length > 0) {
          const posterPath = data.results[0].poster_path;
          return posterPath
            ? `https://image.tmdb.org/t/p/w500${posterPath}`
            : null;
        } else {
          return null; // No concidences // No se encontraron resultados
        }
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      throw new Error("Error fetching data:", error);
    }
  }
}
