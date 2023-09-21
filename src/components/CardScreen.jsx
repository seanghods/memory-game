import '../css/CardScreen.css';

export default function CardScreen({ pokeArray, clickPokemon }) {
  const pokeArrayFirstHalf = pokeArray.filter(
    (poke, index) => index < pokeArray.length / 2,
  );
  const pokeArraySecondHalf = pokeArray.filter(
    (poke, index) => index >= pokeArray.length / 2,
  );
  return (
    <div className="container">
      <div className="card-area">
        <div className="card-row">
          {pokeArrayFirstHalf.map((pokemon, index) => (
            <button
              className="card"
              id={index}
              onClick={e => clickPokemon(e, pokeArray)}
              key={pokemon.name}
            >
              <h3>{pokemon.name}</h3>
              <img draggable={false} src={pokemon.img} alt={pokemon.name} />
            </button>
          ))}
        </div>
        <div className="card-row">
          {pokeArraySecondHalf.map((pokemon, index) => (
            <button
              className="card"
              id={index + 6}
              onClick={e => clickPokemon(e, pokeArray)}
              key={pokemon.name}
            >
              <h3>{pokemon.name}</h3>
              <img draggable={false} src={pokemon.img} alt={pokemon.name} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
