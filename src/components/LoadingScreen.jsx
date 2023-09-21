import '../css/LoadingScreen.css';
import pokeball from '../assets/pokeball.png';

export default function LoadingScreen({ error }) {
  return (
    <div className="loading-screen">
      <p>
        <img src={pokeball} alt="Pic of Pokeball" />
        {error ? 'Error Retrieving Pokemon - Please Refresh' : 'Loading Game'}
        <img src={pokeball} alt="Pic of Pokeball" />
      </p>
    </div>
  );
}
