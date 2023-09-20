import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CardScreen from './components/CardScreen';
import Header from './components/header';
import './css/App.css';

function App() {
  const [pokeArray, setPokeArray] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getPokemon(number) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${number}`,
      );
      const data = await response.json();
      return data;
    }
    async function fetchPokemon() {
      setLoading(true);
      let randomNumberArr = [];
      for (let i = 0; i < 12; i++) {
        let randomNumber;
        do {
          randomNumber = Math.floor(Math.random() * 152);
        } while (randomNumberArr.includes(randomNumber));
        randomNumberArr.push(randomNumber);
      }
      const promises = randomNumberArr.map(number => getPokemon(number));
      const pokemons = await Promise.all(promises);
      let arr = [];
      pokemons.forEach(pokemon => {
        arr.push({
          name: pokemon.forms[0].name,
          img: pokemon.sprites.front_default,
        });
      });
      setPokeArray(arr);
      setTimeout(() => setLoading(false), 1000);
      // setLoading(false);
    }
    fetchPokemon();
  }, []);
  return (
    <>
      <Header />
      {loading ? <LoadingScreen /> : <CardScreen pokeArray={pokeArray} />}
    </>
  );
}

export default App;
