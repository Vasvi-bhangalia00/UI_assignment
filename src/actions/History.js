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


 /*


 syn -> ADD_TO_HISTORY

 word , score, hints, tries


 *
// let tries = [
//   {
//     wordId : "thunder",
//     type: "guess",
//     value: guess,
//     score: 0
//   },
//   {
//     word : "thunder",
//     type: "syn",
//     value: syn,
//     score: 0
//   },
// ]

//  let state = {
//    words : {
//      "1213213" : {
//        word: "thunder",
//        status :"",
//        hints : [],
       
//      }
//    },

//    wordIds : [
//      "1213213"
//    ]
//  }

//  save click -> 
/*

history.tries []

action -> ADD_TO_TRIES

enter word -> save -> sction dispatch -> tries -> concat guess word

click syn -> action dispatch -> tries -> concat -> "syn"-> word -> syn

click def ad ant same as above
shift()

 word : "thunder",
//     type: "syn",
//     value: syn,
//     score: 0
alternate way -> return {...state, tries : [action.object, ...state.tries]}


action -> ADD_TO_HISTORY

getNEwWord or Reset games pe click ->

put tries whole array in words object with key as whatever you want ..can be Date.now()

*/
