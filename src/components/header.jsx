import '../css/header.css';
import pokeball from '../assets/pokeball.png';

export default function Header({ mute, isMuted }) {
  return (
    <header>
      <h1>
        Poke <span className="white"> Find</span>{' '}
        <img src={pokeball} alt="Pic of Pokeball" />
      </h1>
      <button onClick={mute}>{isMuted ? 'Unmute' : 'Mute'}</button>
    </header>
  );
}
