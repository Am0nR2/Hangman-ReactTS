import { useContextFunction } from "../MechanicsContext"

export default function(){
    const {falseAnswers} = useContextFunction()
    return(
        <>
        <div className="hangman">
            <div className="col">
            <div className="top"></div>
            <div className="rope"></div>
        { falseAnswers.length > 0 && <div className="head"></div>}
        { falseAnswers.length > 1 && <div className="body"></div>}
        { falseAnswers.length > 2 && <div className="left-arm"></div> }
        { falseAnswers.length > 3 && <div className="right-arm"></div> }
        { falseAnswers.length > 4 &&  <div className="left-leg"></div> }
        { falseAnswers.length > 5 &&  <div className="right-leg"></div> }
            
            </div>
            
            <div className="bottom"></div>
        </div>  
        <div>
            <div className="letter-bottom"></div>
            
        </div>
        </>
    )
}