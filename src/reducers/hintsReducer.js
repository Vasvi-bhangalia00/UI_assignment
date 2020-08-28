import { FETCH_HINTS_SUCCESS } from "../actions/hints";
const hintsReducer = (state ={ usedHints:[],status:'',id:0}, action) => {
    switch (action.type) {
      case FETCH_HINTS_SUCCESS: return {
          ...state,
          usedHints:[({hintType: action.hintType, hint:action.hint}),...state.usedHints],
          status:'used'
      };
      case "RESET_HINTS": 
      return {...state, usedHints: []}
      default:
        return state;
    }
  };
  export default hintsReducer;

