import { GUESS_LETTER } from "../constants/actionTypes";

function guessLetter(letter) {
    return {
        type: GUESS_LETTER,
        guessLetter: letter.toUpperCase()
    };
}
export default guessLetter;
