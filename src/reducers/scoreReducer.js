
import { ADD_SCORE, DEDUCT_SCORE, SET_SCORE } from '../actions/score'

const scoreReducer=(state={score:0},action)=> {
    switch(action.type)
    {
        case ADD_SCORE: return({
            ...state,
            score:state.score+action.payload,
            
        }) 
        case DEDUCT_SCORE: return({
            ...state,
            score:state.score-action.payload
        })
        case SET_SCORE: return({
            ...state,
            score:action.payload

        })
        default: return state;
    }
}
export default scoreReducer;
