import { MouseEvent ,ReactNode, createContext, useContext, useEffect, useState, } from "react";
import { keysArr, randomQuestion, wordList } from "./data";
import Clap from "./Clap.mp3"

// Type Declorations
type HangmanContextProps = {
    getUserAnswers: (e: MouseEvent<HTMLButtonElement>)=> void
    getRandomQuestion: () => string[]
    startGame: ()=> void
    endGame: (isWon:boolean)=> void
    userWonGame: () => void
    isWon: boolean
    userQuestion: string[]
    userAnswer: string[]
    gameStarted: boolean
    keys: {item:string, isHeld: boolean}[]
    falseAnswers: string[]
}
type HangmanContextChildrenType = {
    children: ReactNode
}
const HangmanContext = createContext({} as HangmanContextProps)

export function useContextFunction(){
    return useContext(HangmanContext)
}
export function HangmanContextProvider({children}:HangmanContextChildrenType){
    // State Declorations
        const [userAnswer, setUserAnswer] =useState <string[]> ([])
        const [gameStarted, setGameStarted] = useState<boolean>(false)
        const [keys, setKeys] = useState<{item:string, isHeld: boolean}[]>(keysArr) 
        const [falseAnswers, setFalseAnswers] = useState <string[]>([]) 
        const [userQuestion, setUserQuestion] = useState<string[]>(randomQuestion)
        const [isWon, setIswon] = useState<boolean>(false)
        const [slapAudio] = useState(new Audio(Clap));
        // functions(){}
        useEffect(()=>{
            if(falseAnswers.length>5){
                setKeys(prevState=> prevState.map(key => ({
                    ...key, isHeld: true
                })))
                setTimeout(()=> {
    
                    endGame(isWon)
                },3000)
            } else if(isWon){
                slapAudio.play();
                setKeys(prevState=> prevState.map(key => ({
                    ...key, isHeld: true
                })))
                setTimeout(()=> {
    
                    endGame(isWon)
                },7000)
            }
        },[falseAnswers.length>5 , isWon])

              

    function getUserAnswers(e: MouseEvent<HTMLButtonElement>){
        setUserAnswer(prevState=> [...prevState, (e.target as HTMLButtonElement).value])
        setKeys(prevState=> prevState.map(key=>{
            if(key.item === (e.target as HTMLButtonElement).value){
               return {...key, isHeld: true}
            } else{
                return key
            }
        }))
        const word = randomQuestion[0]
        if(!word.toUpperCase().split("").includes((e.target as HTMLButtonElement).value)){
            setFalseAnswers(prevState=> [...prevState, (e.target as HTMLButtonElement).value])
        }

    }


    function getRandomQuestion(){
        return userQuestion
    }
    function startGame(){
        setGameStarted(true)
    }
    function endGame(isWon: boolean){
        if(!isWon){
            setKeys(prevState=> prevState.map(key => ({
                ...key, isHeld: false
            })))
            setGameStarted(false)
            setUserAnswer([])
            setFalseAnswers([])
            setUserQuestion(wordList[Math.floor(Math.random()*wordList.length)])
    } else{
            slapAudio.pause();
            slapAudio.currentTime = 0;
            setKeys(prevState=> prevState.map(key => ({
                ...key, isHeld: false
            })))
            setGameStarted(false)
            setUserAnswer([])
            setFalseAnswers([])
            setUserQuestion(wordList[Math.floor(Math.random()*wordList.length)])
            setIswon(false)
            
        }
    
}
    function userWonGame(){
        setIswon(true)
    }

    return(
        <HangmanContext.Provider value={{
            getUserAnswers,
            getRandomQuestion,
            startGame,
            endGame,
            userWonGame,
            isWon,
            userQuestion,
            userAnswer,
            gameStarted,
            keys,
            falseAnswers,
    }}>
            {children}
        </HangmanContext.Provider>
    )
}