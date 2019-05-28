import { GUESS_LETTER, RESET_HANGMAN } from "../constants/actionTypes";
import initialHangmanState from "../constants/initialState";
import addCorrectGuess from "../functions/addCorrectGuess";
import addWrongGuess from "../functions/addWrongGuess";
import getNewRightLetters from "../functions/getNewRightLetters";

function hangmanReducer(state = initialHangmanState, action) {
    switch (action.type) {
        case GUESS_LETTER:
            return Object.assign(
                {},
                state,
                state.guessWord.includes(action.guessLetter)
                    ? addCorrectGuess(
                          state.rightLetters.slice(),
                          action.guessLetter,
                          state.guessWord
                      )
                    : addWrongGuess(
                          state.wrongLetters.slice(),
                          action.guessLetter
                      )
            );
        case RESET_HANGMAN:
            return Object.assign({}, state, {
                wrongLetters: [],
                rightLetters: getNewRightLetters(action.guessWord),
                guessWord: action.guessWord
            });
        default:
            return state;
    }
}
export default hangmanReducer;
