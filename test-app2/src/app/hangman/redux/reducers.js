import { GUESS_LETTER, RESET_HANGMAN } from './types';
import addCorrectGuess from '../utils/addCorrectGuess';
import addWrongGuess from '../utils/addWrongGuess';
import getNewRightLetters from '../utils/getNewRightLetters';

import getNewGuessWord from '../utils/getNewGuessWord';

export const initialGuessWord = getNewGuessWord();

export const initialHangmanState = {
    wrongLetters: [],
    rightLetters: getNewRightLetters(initialGuessWord),
    guessWord: initialGuessWord
};

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
