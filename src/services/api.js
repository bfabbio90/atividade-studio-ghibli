import axios from "axios";

const apiUrl = "https://ghibliapi.vercel.app/films";

async function fetchGhibliFilms() {
  try {
    const response = await axios.get(apiUrl);
    const films = response.data;

    console.log("Filmes do Studio Ghibli:");
    films.forEach((film) => {
      console.log(`${film.title} (${film.release_date})`);
    });

    return films;
  } catch (error) {
    console.error("Erro ao buscar os filmes:", error.message);
  }
}

fetchGhibliFilms();
