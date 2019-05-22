import { combineReducers } from 'redux';

import cardReducer from './cards/reducers/cardReducer';
import hangmanReducer from './hangman/reducers/hangmanReducer';

// function rootReducer(state = {}, action) {
//     return {
//         cardArray: cardReducer(state.cardArray, action),
//         wrongLetters: [],
//         guessWord: [],
//     }
// }

const rootReducer = combineReducers(
        {
            cardState: cardReducer,
            hangmanState: hangmanReducer
        }
    );
export default rootReducer;