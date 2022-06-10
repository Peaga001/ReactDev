// CSS
import './App.css';

//React
import { useCallback,useEffect,useState } from 'react';

//Data
import { wordsList } from './ data/words';

//Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name : "start"},
  {id: 2, name : "game"},
  {id: 3, name : "end"}
]

const guessesQty = 3;

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [picketWord,setPickedWord] = useState("");
  const [pickedCategory,setPickedCategory] = useState("");
  const [letters,setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);
  


  const pickWordAndCategory = () => {

    const categories = Object.keys(words);
    
    //Pick a random category
    const category   = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //Pick a random word
    const word = words[category][Math.floor(Math.random() * Object.keys(category).length)]

    return {category,word};
  };

  //Starts the secret word game
  const startGame = () => {

    //Pick word and pick category
    const {category,word} = pickWordAndCategory();

    console.log(category,word);

    //Create an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    //fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  //Process the letter input
  const verifyLetter = (letter) => {

    const normalizedLetter = letter.toLowerCase();

    //check if letter has already been utilized
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }

    //push guessed letter or remove a guess
    if(letters.includes(normalizedLetter)){
      
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    }
    else{
      
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses-1);
    }
  };


  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  useEffect(()=>{

    if(guesses <= 0){

      //reset all states
      clearLetterStates();

      setGameStage(stages[2].name);
    }

  },[guesses]);

  //Check win condition
  useEffect(() => {
    
  },[guessedLetters])

  //Process the letter input
  const retry = () => {

    setScore(0);
    setGuesses(guessesQty);

    setGameStage(stages[0].name);
  };

  
  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && (
        <Game verifyLetter={verifyLetter} 
              pickedWord={picketWord}
              pickedCategory={pickedCategory}
              letters={letters}
              guessedLetters={guessedLetters}
              wrongLetters={wrongLetters}
              guesses={guesses}
              score={score}
        />
      )}
      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}

    </div>
  );
}

export default App;
