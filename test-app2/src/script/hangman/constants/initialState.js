import { MAX_WRONG_ANSWERS } from './globalConstants.js';
import getNewGuessWord from '../functions/getNewGuessWord';

const initialGuessWord = getNewGuessWord();

export const initialHangmanState = {
    wrongLetters: [],
    rightLetters: Array(initialGuessWord.length).fill(""),
    guessWord: initialGuessWord
};
export default initialHangmanState;
