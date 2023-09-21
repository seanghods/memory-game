import '../css/Scoreboard.css';

export default function Scoreboard({ pokeArray, score, highScore }) {
  return (
    <div className="scoreboard">
      <h3>
        Pokeballs Remaining:{' '}
        <span className="white">{pokeArray.length - score}</span>
      </h3>
      <h3>
        Score: <span className="white">{score}</span>
      </h3>
      <h3>
        Highest Score: <span className="white">{highScore}</span>
      </h3>
    </div>
  );
}
