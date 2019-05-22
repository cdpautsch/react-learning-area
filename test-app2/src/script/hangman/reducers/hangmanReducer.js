import { GUESS_LETTER, RESET_GAME } from '../constants/actionTypes';
import { MAX_WRONG_ANSWERS } from '../constants/globalConstants.js';
import initialHangmanState from '../constants/initialState';
import addCorrectGuess from '../functions/addCorrectGuess';
import addWrongGuess from '../functions/addWrongGuess';

function hangmanReducer(state = initialHangmanState, action) {
    switch (action.type) {
        case GUESS_LETTER:
            return Object.assign({}, state, (
                state.guessWord.includes(action.guessLetter) ?
                addCorrectGuess(
                    state.rightLetters.slice(),
                    action.guessLetter,
                    state.guessWord
                ) :
                addWrongGuess(
                    state.wrongLetters.slice(),
                    action.guessLetter
                )
            ));
        case RESET_GAME:
            return Object.assign({}, state, {
                wrongLetters: [],
                rightLetters: Array(action.guessWord.length).fill(""),
                guessWord: action.guessWord
            });
        default:
            return state;
    }
}
export default hangmanReducer;