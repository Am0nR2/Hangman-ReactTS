import React, { useEffect } from "react";
import Hangman from "./Components/Hangman";
import Keyboard from "./Components/Keyboard";
import UknownWords from "./Components/UknownWords";
import { useContextFunction } from "./MechanicsContext";
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti'

function App() {
  const {getRandomQuestion, gameStarted, startGame, userWonGame, userQuestion ,userAnswer,isWon } = useContextFunction()

  const [word ,question ] = getRandomQuestion()
  



  const wordToKnow = userQuestion[0].toUpperCase().split("").sort()
  const userWords = userAnswer.sort()
  const DoesUserKnow = wordToKnow.every(element =>  userWords.includes(element));
  if(DoesUserKnow){
    userWonGame()
    if(DoesUserKnow){
      console.log("Naber")
    }    
}

for(let i = 0; i<wordToKnow.length; i++){

}

const { width, height } = useWindowSize()



  return (
    <>
  <h2 style={{textAlign:"center"}}>{gameStarted ? question : "Test Your SKills"}</h2>
    <Hangman/>
      {gameStarted ? <UknownWords /> : <button onClick={startGame}>Start Test</button>}
    <Keyboard />
    {isWon &&   <Confetti
      width={width}
      height={height}
  />}
  </>
  )
}

export default React.memo(App)
