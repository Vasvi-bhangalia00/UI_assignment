import {ADD_WORD,ADD_GUESS} from '../actions/word.js'

const wordReducer = (state = { currWord: "", status: 'error',guesses:[]}, action) => {
    if(action.type === ADD_WORD){
        return {...state, currWord: action.word,status:'success'}
    }
    else if(action.type===ADD_GUESS){
        return {...state, guesses:[({guess:action.guess ,status: action.status}),...state.guesses]}
    }else if(action.type === "RESET_GUESS"){
        return {...state, guesses: []}
    }
    return state
}
export default wordReducer ;