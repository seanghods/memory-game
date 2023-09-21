import '../css/CardScreen.css';
import pokeball from '../assets/pokeball.png';

export default function CardScreen({ pokeArray, clickPokemon, isGameOver }) {
  const pokeArrayFirstHalf = pokeArray.filter(
    (poke, index) => index < pokeArray.length / 2,
  );
  const pokeArraySecondHalf = pokeArray.filter(
    (poke, index) => index >= pokeArray.length / 2,
  );
  function renderPokemon(pokemon, index) {
    return (
      <button
        className="card"
        id={index}
        onClick={e => clickPokemon(e, pokeArray)}
        key={pokemon.name}
      >
        <h3>
          {isGameOver && pokemon.isClicked ? (
            <>
              <img className="pokeball" src={pokeball} alt="Pic of Pokeball" />
              {'Caught! ' + pokemon.name}
            </>
          ) : (
            pokemon.name
          )}
        </h3>
        <img draggable={false} src={pokemon.img} alt={pokemon.name} />
      </button>
    );
  }
  return (
    <div className="container">
      <div className="card-area">
        <div className="card-row">
          {pokeArrayFirstHalf.map((pokemon, index) =>
            renderPokemon(pokemon, index),
          )}
        </div>
        <div className="card-row">
          {pokeArraySecondHalf.map((pokemon, index) =>
            renderPokemon(pokemon, index),
          )}
        </div>
      </div>
    </div>
  );
}
