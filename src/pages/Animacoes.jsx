import { useEffect, useState } from "react";
import { getAllAnimations } from "../services/api";
import AnimationCard from "../components/AnimationCard";
import Loader from "../components/Loader";
import "@/styles/pages/Animacoes.css";

export default function Animacoes() {
  const [animations, setAnimations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllAnimations();
      setAnimations(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="animacoes-container">
      {animations.map((animacao) => (
        <AnimationCard key={animacao.id} animation={animacao} />
      ))}
    </div>
  );
}
