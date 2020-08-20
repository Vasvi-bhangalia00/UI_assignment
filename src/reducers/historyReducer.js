import {ADD_TO_HISTORY,SHOW_HISTORY_WORD} from '../actions/History'

const historyReducer= (state = { words: {}, showWordId: null, wordIds: []}, action) => {
    switch (action.type) {
      case ADD_TO_HISTORY: {
        const newState = Object.assign({}, state);
        const wordId = Date.now();
        newState.words[wordId] = {
          word: action.word,
           score: action.score,
          guesses: action.guesses,
          hints:action.hints
        };
        newState.wordIds = [wordId, ...newState.wordIds];
        return newState;
      }
    
      case SHOW_HISTORY_WORD:
        return({
            ...state,
            showWordId: action.wordId
        }) ;
      default:
        return state;
    }
  };
  
  export default historyReducer;

