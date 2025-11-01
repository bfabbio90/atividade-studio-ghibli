import { Link } from "react-router-dom";
import "@/styles/components/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Studio Ghibli</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/animacoes">Animações</Link>
        <Link to="/sobre">Sobre</Link>
      </div>
    </nav>
  );
}
