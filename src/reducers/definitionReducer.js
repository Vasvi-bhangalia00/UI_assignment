import {  DEF_ADDED, DEF_USED} from '../actions/definitions'
    
    const defReducer = (state = { isLoading: false, def:[], errMess : ''} , action) => {
        switch(action.type){
            case DEF_ADDED:
                return {...state, isLoading: false, def : action.payload}
            case DEF_USED:
                return {...state, def: state.def.map((item, idx) => idx === action.payload ? {...item, used: true} : item)}

            default:
                 return state
        }
    }
    
    export default defReducer;