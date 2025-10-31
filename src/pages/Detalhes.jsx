import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import Loader from "../components/Loader";

function Detalhes() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFilm() {
      try {
        const response = await api.get(`/${id}`);
        setFilm(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFilm();
  }, [id]);

  if (loading) return <Loader />;

  if (!film) return <p>Filme não encontrado.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{film.title}</h1>
      <img
        src={film.image}
        alt={film.title}
        style={{ width: "300px", borderRadius: "10px" }}
      />
      <p>
        <strong>Diretor:</strong> {film.director}
      </p>
      <p>
        <strong>Produtor:</strong> {film.producer}
      </p>
      <p>
        <strong>Lançamento:</strong> {film.release_date}
      </p>
      <p>{film.description}</p>
    </div>
  );
}

export default Detalhes;
