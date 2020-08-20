import React from 'react'
import {useSelector} from "react-redux"

export default function DisplayHistory({showWordId}) {

    const {words} = useSelector(state => state.history)
    const currWord = words[showWordId] ?? {}
    return (
    <div >
      {
        Object.keys(currWord).length === 0 ? null : (
          <div className='history-block'>
          <p className='history-type'>Hints used: </p>
      {currWord.hints?.map((item, idx) => {
        return ( <li style={{fontSize:"14px" ,fontWeight:"600"}}>{item.hintType}: {item.hint}</li>)
      })}<br />
      <p className='history-type'>Guesses: </p>
      {currWord.guesses?.map((item, idx) => {
        return ( <li style={{fontSize:"14px" }}>{item.guess}: {item.status}</li>)
      })}
      </div>
        )
      }
      
    </div>
    )
}



