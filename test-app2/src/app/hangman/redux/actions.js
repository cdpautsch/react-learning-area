import * as types from './types';
import getNewGuessWord from '../utils/getNewGuessWord';

export function guessLetter(letter) {
    return {
        type: types.GUESS_LETTER,
        guessLetter: letter.toUpperCase()
    };
}

export function resetHangman() {
    return {
        type: types.RESET_HANGMAN,
        guessWord: getNewGuessWord()
    };
}
