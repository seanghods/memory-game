import '../css/StartScreen.css';

export default function StartScreen({ startGame }) {
  return (
    <div className="start-screen">
      <h3>Welcome!</h3>
      <p>
        Professor Oak has provided you with 12 Poke Balls and instructed you to
        capture 12 unique wild Pokemon!{' '}
      </p>
      <p style={{ fontSize: '30px', paddingTop: '10px' }}>
        Don&apos;t capture the same Pokemon twice
      </p>
      <p>or you won&apos;t have enough Pokeballs to capture all 12!</p>
      <button onClick={startGame}>Start the Hunt!</button>
    </div>
  );
}
