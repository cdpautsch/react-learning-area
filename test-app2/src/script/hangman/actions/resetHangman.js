import { RESET_HANGMAN } from "../constants/actionTypes";
import getNewGuessWord from "../functions/getNewGuessWord";

function resetHangman() {
    return {
        type: RESET_HANGMAN,
        guessWord: getNewGuessWord()
    };
}
export default resetHangman;
