import '../css/CardScreen.css';

export default function CardScreen({ pokeArray }) {
  const pokeArrayFirstHalf = pokeArray.filter(
    (poke, index) => index < pokeArray.length / 2,
  );
  const pokeArraySecondHalf = pokeArray.filter(
    (poke, index) => index >= pokeArray.length / 2,
  );
  return (
    <div className="container">
      <div className="cardarea">
        <div className="card-row">
          {pokeArrayFirstHalf.map(pokemon => (
            <button className="card" key={pokemon.name}>
              <h3>{pokemon.name}</h3>
              <img src={pokemon.img} alt={pokemon.name} />
            </button>
          ))}
        </div>
        <div className="card-row">
          {pokeArraySecondHalf.map(pokemon => (
            <button className="card" key={pokemon.name}>
              <h3>{pokemon.name}</h3>
              <img src={pokemon.img} alt={pokemon.name} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}