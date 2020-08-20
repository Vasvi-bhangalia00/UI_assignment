import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { getNewWord} from "../actions/word.js"
import { fetchDef} from "../actions/definitions"
import Hints from "./Hints.js"
import '../App.css';
import {fetchRelatedWord} from "../actions/relatedWords.js"
import Guess from './Guess'
import { deductScore} from '../actions/score.js'
import History from './History'
import { resetGame } from '../actions/History.js'

const Container = () => {
    const wordFetched = useSelector(state => state.word.currWord)
    const dispatch = useDispatch()
    const score=useSelector(state=>state.scores.score)
   useEffect(() => {
  
      dispatch(getNewWord());
    },[])
    
   useEffect(() => {
      if(wordFetched){
        dispatch(fetchDef(wordFetched)); 
        dispatch(fetchRelatedWord(wordFetched)); 
      }
    }, [wordFetched])

    const handleNewWord=()=>
    {
      dispatch(getNewWord())
      dispatch(deductScore(4))

    }
    const handleReset=()=>
    {
        dispatch(resetGame());
      
    }
  
    return (
      <div className='App'>
      <div className="main" >
        <div className='display-score'>Score: <button className='score'>{score}</button> </div>
    <h1 className='heading'>Guess the Word</h1>
       <Guess />
        </div>
        <div className="row">
          <div className="Hints-Pane col-lg-9 col-md-9 col-sm-9">
            <Hints />
          </div>
      <div className="History-Pane col-log-3 col-md-3 col-sm-3">
            <span className="fetchNewWord"><button onClick={handleNewWord}>Get New Word (-4pts)</button></span>
            <h3>History</h3>
            <History />
            <span className="resetGame"><button onClick={ handleReset }>Reset Game!</button></span>
          </div>
          
        </div>
        
      </div>
    )
  
  }
  export default Container;