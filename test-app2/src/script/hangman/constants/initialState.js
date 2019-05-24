import getNewGuessWord from "../functions/getNewGuessWord";
import getNewRightLetters from "../functions/getNewRightLetters";

const initialGuessWord = getNewGuessWord();

const initialHangmanState = {
    wrongLetters: [],
    rightLetters: getNewRightLetters(initialGuessWord),
    guessWord: initialGuessWord
};
export default initialHangmanState;
