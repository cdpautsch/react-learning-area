import { combineReducers } from 'redux';

import cardReducer from './cards/redux';
import hangmanReducer from './hangman/redux';

const rootReducer = combineReducers({
    cardState: cardReducer,
    hangmanState: hangmanReducer
});
export default rootReducer;
