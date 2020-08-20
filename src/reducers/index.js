import { combineReducers } from "redux"
import defReducer from "./definitionReducer"
import wordReducer from "./wordReducer"
import relatedWordReducer from './relatedWordReducer';
import scoreReducer from './scoreReducer';
import historyReducer from "./historyReducer";
import hintsReducer from "./hintsReducer";

const appReducer = combineReducers({
    api:  defReducer,
    word : wordReducer,
    relWord:relatedWordReducer,
    scores:scoreReducer,
    history:historyReducer,
    hint:hintsReducer
  })

const rootReducer = (state, action) => {
  if (action.type === 'RESET_GAME') {
    state = {};
  }

  return appReducer(state, action);
};

export default rootReducer;