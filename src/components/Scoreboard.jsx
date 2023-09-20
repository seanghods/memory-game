import '../css/Scoreboard.css';

export default function Scoreboard({ score }) {
  return (
    <div className="scoreboard">
      <h3>
        Score: <span className="white">{score}</span>
      </h3>
    </div>
  );
}
