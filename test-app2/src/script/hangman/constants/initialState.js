import getNewGuessWord from '../functions/getNewGuessWord';
import getNewRightLetters from '../functions/getNewRightLetters';

const initialGuessWord = getNewGuessWord();

export const initialHangmanState = {
    wrongLetters: [],
    rightLetters: getNewRightLetters(initialGuessWord),
    guessWord: initialGuessWord
};
export default initialHangmanState;
