import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { deductScore } from '../actions/score'
import {synUsed,antUsed} from '../actions/relatedWords'
import { defUsed } from '../actions/definitions'
import { fetchHintsTypes } from '../actions/hints'
import {Dropdown} from 'react-bootstrap'
export default function Hints() {

    const defss = useSelector(state => state.api.def)
    const syns=useSelector(state=>state.relWord.syn)
    const ants=useSelector(state=>state.relWord.ant)
    const [synHint,setSynHint]=useState('')
    const [antHint,setAntHint]=useState('')
    const [defHint,setDefHint]=useState('')
    const dispatch = useDispatch()
    const[synUs,setSynUsed]=useState(false)
    const[antUs,setAntUsed]=useState(false)
    const[defUs,setDefUsed]=useState(false)
    const [index1, setIndex1] = useState(0)
    const [index2, setIndex2] = useState(0)
    const [index3, setIndex3] = useState(1)
  
    const displaySynonym=()=>
    {
        setAntUsed(false)
        setDefUsed(false)
        setSynUsed(true)
        
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
            setSynUsed(false)
        }
        
        
    }
    const displayAntonym=()=>
    {
        setSynUsed(false)
        setDefUsed(false)
        setAntUsed(true)
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
    const handleNewHints=()=>{
          setAntHint('')
          setDefHint('')
          setSynHint('')
    }
    const displayDef=()=>
    {
        setAntUsed(false)
        setSynUsed(false)
        setDefUsed(true)
        const definitions=defss.map(def=>def);
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
          <Dropdown>
  <Dropdown.Toggle  id="dropdown-basic" className='hint-button'>
  Take hint(-3pts)
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onSelect={displaySynonym }>Synonym</Dropdown.Item>
   
    <Dropdown.Item onSelect={displayAntonym }>Antonym</Dropdown.Item>
    <Dropdown.Item onSelect={displayDef} >Definition</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<span className='hint-block'>
{synUs? `Synonym is : ${synHint}`:''}
{antUs? `Antonym is : ${antHint}`:''}
 {defUs?`Defintion is : ${defHint}`:''}  
 {!synUs && !antUs && !defUs ? 'No Hints taken':''}    
 </span>
 <button className='reset' onClick={handleNewHints}>Refresh Hints</button>
    </div>
        
        
    )
}

