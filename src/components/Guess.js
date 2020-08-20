import React,{useState} from 'react'
import {useSelector,useDispatch }from 'react-redux'
import {addScore,deductScore} from '../actions/score'
import { addGuess } from '../actions/word';

export default function Guess() {

  const dispatch=useDispatch();
  const defs = useSelector(state => state.api.def);
  const syns = useSelector(state => state.relWord.syn);
  const wordFetched = useSelector(state => state.word.currWord);
  const  [word, setWord] = useState("");
   const synonyms= syns.length > 0 && syns.map(item =>item.word)
    
    let [result,setResult]=useState('Result will be displayed here')
    const handleSubmit = () => {
        let answer=false;
        for(let index in synonyms){
            if(word !== ""  && word.toLowerCase() === synonyms[index]){
                answer=true;
                setResult('Guessed the correct synonym (+10)')
                dispatch(addGuess(word,'correct'));
                dispatch(addScore(10))
            }
          }
         if(!answer && word !== ""  && word.toLowerCase() !== wordFetched){
            setResult("Word not matched (-3)")
            dispatch(addGuess(word,'wrong'));
            dispatch(deductScore(3))
        }
        else if(!answer && word !== ""  && word.toLowerCase() === wordFetched)
        {
            setResult("Guessed correct word (+10)")
            dispatch(addGuess(word,'correct'));
            dispatch(addScore(10))
        }
       
      }
    
    return (
        <div>
            <div>
            <input type="text" className='input-tab' value = {word} onChange={e => setWord(e.currentTarget.value)} ></input>
            <button className='submit-button' onClick={handleSubmit}>Save</button>
            </div>
            <div className='def-display'><span className='def-head'>Word is defined as:</span><br />
          {
                defs.length > 0 && defs.filter( (item,idx) => idx===0).map(item => (<p>{item.text}</p>))
          }
          </div>
        <div className='result'><h3>--{result}--</h3></div> 
            
        </div>
    )

        }