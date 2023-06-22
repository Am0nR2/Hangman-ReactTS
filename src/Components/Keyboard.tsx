import { memo, useState } from "react";
import { MouseEvent } from "react";
import { useContextFunction } from "../MechanicsContext";


export default memo(function() {
    
    const {getUserAnswers, keys,falseAnswers} =useContextFunction()
    console.log(falseAnswers)
    const keysElements:React.ReactNode[]= keys.map((key,i)=> (
        <button key={i++} disabled={key.isHeld} onClick={(e)=>getUserAnswers(e)} className="keyboard-item" value={key.item}>{key.item}</button>
    ))
    return(
     <div className="keys">
        <div className="keyboard-row">{keysElements.slice(0, 10)}</div>
        <div className="keyboard-row">{keysElements.slice(10, 19)}</div>
        <div className="keyboard-row">{keysElements.slice(19)}</div>
      </div>
        )
})