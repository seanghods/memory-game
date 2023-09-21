import '../css/Scoreboard.css';

export default function Scoreboard({ score, highScore }) {
  return (
    <div className="scoreboard">
      <h3>
        Score: <span className="white">{score}</span>
      </h3>
      <h3>
        Highest Score: <span className="white">{highScore}</span>
      </h3>
    </div>
  );
}
