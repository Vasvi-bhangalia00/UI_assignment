import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import DisplayHistory from './DisplayHistory';
import {showHistoryWord} from '../actions/History'
 function History() {

   const history = useSelector(state => state.history)
   const dispatch = useDispatch()

   const handleClick = (id) => {
      dispatch(showHistoryWord(id))
   }


  return(
    <div>
      <ul style={{padding: "0"}}>
      {
        history.wordIds.length > 0 ?
        history.wordIds.map(item => (
        <li onClick={e => handleClick(item)} key={item} style={{padding: "0.5rem", display : "flex", flexDirection: "row", alignItems: "center", border: "1px solid #222", width : "100%", justifyContent: "space-between",backgroundImage:"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"}}>
          <h5 style={{margin: 0,}}>{history.words[item].word}</h5>
          <p style={{margin: 0, fontWeight:'bold'}}>{history.words[item].score}</p>
        </li>
        ))
        : <p style={{padding: "0.5rem", display : "flex", flexDirection: "row", alignItems: "center", border: "1px solid #222", width : "100%", justifyContent: "space-between",backgroundImage:"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",fontWeight:"bold"}}>No history Available</p>
      }
      </ul>
      <DisplayHistory showWordId={history.showWordId} />
    </div>
  )
 }
 export default History;
  

 //rem -> relative units