import { combineReducers } from 'redux';

import cardReducer from './cards/reducers/cardReducer';
import hangmanReducer from './hangman/reducers/hangmanReducer';

const rootReducer = combineReducers(
        {
            cardState: cardReducer,
            hangmanState: hangmanReducer
        }
    );
export default rootReducer;