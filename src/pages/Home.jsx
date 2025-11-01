import imagem from "../assets/images.png"
import "@/styles/pages/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <img src={imagem} alt="Studio Ghibli Logo" className="home-logo" />
      <h1>Bem-vindo ao Mundo Ghibli 🌿</h1>
      <p>
        Explore as animações mágicas do Studio Ghibli e descubra detalhes sobre
        seus filmes mais amados.
      </p>
      <Link to="/animacoes" className="btn2">
        Ver animes 
      </Link>
    </div>
  );
}
