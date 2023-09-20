import '../css/LoadingScreen.css';
import pokeball from '../assets/pokeball.png';

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <p>
        <img src={pokeball} alt="Pic of Pokeball" />
        Loading Game!
        <img src={pokeball} alt="Pic of Pokeball" />
      </p>
    </div>
  );
}
