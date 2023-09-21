import '../css/GameEndModal.css';

export default function GameEnd({ isWinner }) {
  return (
    <div className="game-over">
      <h3>Game Over!</h3>
      {isWinner ? (
        <p>
          Congrats! You won by catching all Pokemon without repeating a single
          one!
        </p>
      ) : (
        <p>You failed to catch a unique Pokemon with that last catch!</p>
      )}
      <button>Restart!</button>
    </div>
  );
}
