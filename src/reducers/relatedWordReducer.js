import {SYN_ADDED,ANT_ADDED, SYN_USED,ANT_USED} from '../actions/relatedWords.js'

const relatedWordReducer = (state = { isLoading: false, syn:[], ant: [], errMess : ''} , action) => {
    switch(action.type)
    {
        case SYN_ADDED :
            return {...state, isLoading: false, syn: action.payload}
         case ANT_ADDED :
            return {...state, isLoading: false, ant: action.payload}
        case ANT_USED :
            return {...state, ant : state.ant.map((item, idx) => idx === action.payload ? {...item, used: true} : item)}
        case SYN_USED :
                return {...state, syn : state.syn.map((item, idx) => idx === action.payload ? {...item, used: true} : item)}
    
        default :
        return state;
    }
   
}
export default relatedWordReducer ;