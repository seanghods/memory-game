import '../css/header.css';
import pokeball from '../assets/pokeball.png';

export default function Header() {
  return (
    <header>
      <h1>
        Poke <span className="white"> Find</span>{' '}
        <img src={pokeball} alt="Pic of Pokeball" />
      </h1>
    </header>
  );
}
