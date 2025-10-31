function AnimationCard({ filme }) {
  if (!filme) return null;

  return (
    <div>
      <h2>{filme.title}</h2>
      <p>Diretor: {filme.director}</p>
      <p>Ano de Lançamento: {filme.release_date}</p>
      <p>Descrição: {filme.description}</p>
    </div>
  );
}

export default AnimationCard;
