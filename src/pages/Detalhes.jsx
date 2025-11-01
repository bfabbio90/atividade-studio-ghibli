import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import "./Detalhes.css";

export default function Detalhes() {
  const { id } = useParams();
  const [animacao, setAnimacao] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getAnimationById(id); // Tobias, Ainda vou importar essa função do services/api
      setAnimation(data);
    }
    fetchData();
  }, [id]);

  if (!animation) return <Loader />;

  return (
    <div className="detalhes">
      <img src={animacao.movie_banner} alt={animacao.title} className="detalhes-banner" />
      <h1>{animacao.title}</h1>
      <h3>{animacao.original_title}</h3>
      <p className="descricao">{animacao.description}</p>
      <p><strong>Diretor:</strong> {animacao.director}</p>
      <p><strong>Lançamento:</strong> {animacao.release_date}</p>
      <Link to="/animacoes" className="btn">Voltar</Link>
    </div>
  );
}
