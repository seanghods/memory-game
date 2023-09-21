import '../css/GameEndModal.css';

export default function GameEnd({ isWinner, restart }) {
  return (
    <div className={isWinner ? 'game-over winner' : 'game-over loser'}>
      {isWinner ? (
        <>
          <h3>Congrats!</h3>
          <p>
            Congrats! You won by catching all Pokemon without repeating a single
            one!
          </p>
        </>
      ) : (
        <>
          <h3>Game Over!</h3>
          <p>You failed to catch a unique Pokemon with that last catch!</p>
        </>
      )}
      <button onClick={restart}>Restart!</button>
    </div>
  );
}
