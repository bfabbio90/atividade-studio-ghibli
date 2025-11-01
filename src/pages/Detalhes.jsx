import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAnimationById } from "../services/api";
import Loader from "../components/Loader";
import "@/styles/pages/Detalhes.css";

export default function Detalhes() {
  const { id } = useParams();
  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getAnimationById(id);
      setAnimation(data);
    }
    fetchData();
  }, [id]);

  if (!animation) return <Loader />;

  return (
    <div className="detalhes">
      <img src={animation.movie_banner} alt={animation.title} className="detalhes-banner" />
      <h1>{animation.title}</h1>
      <h3>{animation.original_title}</h3>
      <p className="descricao">{animation.description}</p>
      <p><strong>Diretor:</strong> {animation.director}</p>
      <p><strong>Lançamento:</strong> {animation.release_date}</p>
      <Link to="/animacoes" className="btn">Voltar</Link>
    </div>
  );
}
