import { useState, useEffect, useRef } from 'react';
import Header from './components/header';
import StartScreen from './components/StartScreen';
import Scoreboard from './components/Scoreboard';
import LoadingScreen from './components/LoadingScreen';
import CardScreen from './components/CardScreen';
import GameEnd from './components/GameEndModal';
import pokesong from './assets/pokesong.mp3';
import './css/App.css';

function App() {
  const [pokeArray, setPokeArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [reset, setReset] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const songRef = useRef(null);
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
  }, [reset]);
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
        if (score > highScore) setHighScore(score);
        setGameOver(true);
        setIsWinner(true);
      }
      randomizePokemon(pokeArray);
    } else {
      //Game Lose
      if (score > highScore) setHighScore(score);
      setGameOver(true);
    }
  }
  function restart() {
    setGameOver(false);
    setIsWinner(false);
    setScore(0);
    setReset(reset => reset + 1);
  }
  function startGame() {
    setGameStarted(true);
    setReset(reset => reset + 1);
    playSong();
  }
  function playSong() {
    songRef.current = new Audio(pokesong);
    songRef.current.volume = 0.1;
    songRef.current.play();
  }
  function toggleMute() {
    if (songRef.current) {
      songRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }
  return (
    <>
      <Header mute={toggleMute} isMuted={isMuted} />
      {gameStarted ? (
        loading ? (
          <LoadingScreen />
        ) : (
          <>
            <Scoreboard
              pokeArray={pokeArray}
              score={score}
              highScore={highScore}
            />
            <CardScreen pokeArray={pokeArray} clickPokemon={clickPokemon} />
          </>
        )
      ) : (
        <StartScreen startGame={startGame} />
      )}
      {gameOver ? <GameEnd isWinner={isWinner} restart={restart} /> : null}
    </>
  );
}

export default App;
