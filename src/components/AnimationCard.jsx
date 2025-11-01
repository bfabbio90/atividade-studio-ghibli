import { Link } from "react-router-dom";
import "./AnimationCard.css";

export default function AnimationCard({ animation }) {
  return (
    <div className="card">
      <img src={animation.image} alt={animation.title} className="card-img" />
      <h2>{animation.title}</h2>
      <p>{animation.original_title}</p>
      <Link to={`/animacao/${animation.id}`} className="btn">
        Detalhes
      </Link>
    </div>
  );
}