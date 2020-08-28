import {getNewWord} from './word'
export const ADD_TO_HISTORY='ADD_TO_HISTORY'
export const SHOW_HISTORY_WORD='SHOW_HISTORY_WORD'

export const addToHistory = data => ({
    type: ADD_TO_HISTORY,
    word: data.word,
    score: data.score,
    hints: data.hints,
    guesses:data.guesses
  })
  
  export const showHistoryWord = wordId => ({
    type: SHOW_HISTORY_WORD,
    wordId,
  });

  export const resetGame = () => (dispatch) => {
    dispatch({ type: 'RESET_GAME' });
    dispatch(getNewWord());
  };


 