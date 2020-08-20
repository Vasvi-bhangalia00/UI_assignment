import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { deductScore } from '../actions/score'
import {synUsed,antUsed} from '../actions/relatedWords'
import { defUsed } from '../actions/definitions'
import { fetchHintsTypes } from '../actions/hints'
export default function Hints() {
    const defss = useSelector(state => state.api.def)
    const syns=useSelector(state=>state.relWord.syn)
    const ants=useSelector(state=>state.relWord.ant)
    const [synHint,setSynHint]=useState('')
    const [antHint,setAntHint]=useState('')
    const [defHint,setDefHint]=useState('')
    const dispatch = useDispatch()
    const [index1, setIndex1] = useState(0)
    const [index2, setIndex2] = useState(0)
    const [index3, setIndex3] = useState(0)
  
    const displaySynonym=()=>
    {
        const synonyms=syns.map(syn=>syn);
        if( index1 <synonyms.length && synonyms[index1].word && synonyms[index1].used===false)
        {
            setSynHint(synonyms[index1].word);
            dispatch(deductScore(3))
            dispatch(synUsed(index1))
            setIndex1(prevState=>prevState+1)
            dispatch(fetchHintsTypes("synonym",synonyms[index1].word));
        }
        else{
            setSynHint('No synonyms found')
        }
        

    }
    const displayAntonym=()=>
    {
        const antonyms=ants.map(ant=>ant);
        if(antonyms)
        {
        if(index2<antonyms.length &&antonyms[index2].word && antonyms[index2].used===false )
        {
            setAntHint(antonyms[index2].word);
            dispatch(deductScore(3))
           dispatch(antUsed(index2));
            setIndex2(prevState=>prevState+1)
            dispatch(fetchHintsTypes("antonym",antonyms[index2].word));
        }
        else{
            setAntHint('No antonyms found')
        }
        }
    }
    const handleNewWord=()=>{
          setAntHint('')
          setDefHint('')
          setSynHint('')
    }
    const displayDef=()=>
    {
        const definitions=defss.map(def=>def);
        definitions[0].used=false;
         if(index3 < definitions.length && definitions[index3].text && definitions[index3].used===false )
            {
             setDefHint(definitions[index3].text);
            dispatch(deductScore(3))
            dispatch(defUsed(index3));
            setIndex3(prevState=>prevState+1)
            dispatch(fetchHintsTypes("definition",definitions[index3].text));

         }
        else{
             setDefHint('No defintions found')
         }
    }
    return (
        <div>
          <div className='hint-button'>Take hint(-3pts)</div >
          <span className='hint-options'>
        <button onClick={handleNewWord}>Refresh hints</button>
         <button onClick={displaySynonym }>Synonym</button>
           {synHint}
          <button onClick={displayAntonym}>Antonym</button>
          {antHint}
          <button onClick={displayDef}>Definition</button>
          {defHint}
          
          </span>
        </div>  
        
    )
}

/*

defs : [
    {
        word: "",
        used: bool
    }
    {
        word: "",
        used: bool
    }
    {
        word: "",
        used: bool
    }
    {
        word: "",
        used: bool
    }
    {
        word: "",
        used: bool
    }
]

word: {

},

hints: {
    defs: [],
    syn : [],
    ant: []
}


*/
