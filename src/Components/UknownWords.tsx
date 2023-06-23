import { useContextFunction } from "../MechanicsContext"

export default function(){
    const {getRandomQuestion, userAnswer } = useContextFunction()    
    const word = getRandomQuestion()[0]
    const questionElements = word.toUpperCase().split("").map((letter, i) => (
        <div key={i++} className="letters-area">
                <p className="unknown-lt">{userAnswer.includes(letter) ? letter : "?"}</p>     
                <div className="unknown-bd"></div>       
        </div>
    ))


    return(<>
        <div className="un-letters">
        {questionElements}
        </div>

    </>
    )
}