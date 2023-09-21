import { useState, useEffect } from 'react';
import Header from './components/header';
import Scoreboard from './components/Scoreboard';
import LoadingScreen from './components/LoadingScreen';
import CardScreen from './components/CardScreen';
import GameEnd from './components/GameEndModal';
import './css/App.css';

function App() {
  const [pokeArray, setPokeArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [isWinner, setIsWinner] = useState(false);
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
          name:
            pokemon.forms[0].name.charAt(0).toUpperCase() +
            pokemon.forms[0].name.slice(1),
          img: pokemon.sprites.front_default,
          isClicked: false,
        });
      });
      setPokeArray(arr);
      setTimeout(() => setLoading(false), 1000);
      // setLoading(false);
    }
    fetchPokemon();
  }, []);
  function randomizePokemon(pokeArray) {
    const arrCopy = [...pokeArray];
    for (let i = arrCopy.length - 1; i > 0; i--) {
      let swapNumber = Math.floor(Math.random() * (i + 1));
      [arrCopy[i], arrCopy[swapNumber]] = [arrCopy[swapNumber], arrCopy[i]];
    }
    setPokeArray(arrCopy);
  }
  function clickPokemon(e, pokeArray) {
    if (!pokeArray[e.currentTarget.id].isClicked && !gameOver) {
      const arrCopy = [...pokeArray];
      arrCopy[e.currentTarget.id].isClicked = true;
      setPokeArray(arrCopy);
      setScore(score => score + 1);
      if (score == pokeArray.length) {
        //Game Win
      }
      randomizePokemon(pokeArray);
    } else {
      //Game Lose
    }
  }
  return (
    <>
      <Header />
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Scoreboard score={score} />
          <CardScreen pokeArray={pokeArray} clickPokemon={clickPokemon} />
        </>
      )}
      {gameOver ? <GameEnd isWinner={isWinner} /> : null}
    </>
  );
}

export default App;
