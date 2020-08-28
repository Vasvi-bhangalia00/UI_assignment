import CONFIG from "../components/Config"
import axios from "axios"
import {addToHistory, showHistoryWord} from './History'
export const ADD_WORD= "ADD_WORD";
export const FETCH_WORD_STARTED="FETCH_WORD_STARTED";
export const ADD_GUESS='ADD_GUESS'
  export const addWord = word => ({
    type: ADD_WORD,
    word
})

export const addGuess = (guess, status) => ({
  type: ADD_GUESS,
  guess,
  status
});

export const getNewWord = () => ( dispatch, getState ) => {
  const state=getState();
  console.log(state);
  if (state.word && state.word.status === 'success' && (state.hint || state.word.guesses)) {
    console.log("inside add to history")
     dispatch(addToHistory({
       word: state.word.currWord, score: state.scores.score, guesses: state.word.guesses, hints: state.hint.usedHints
     }));
   }
    dispatch(showHistoryWord(null));
    dispatch({type:"RESET_GUESS"})
    dispatch({type: "RESET_HINTS"})
    
    axios.get(CONFIG.API_URL.wordsapi+CONFIG.API_URL.RANDOM_WORD+CONFIG.API_KEY)
    .then(res =>
            dispatch(addWord(res.data.word))
    )
    .catch(err => console.log(err))

}

