import { RESET_GAME } from '../constants/actionTypes';
import getNewGuessWord from '../functions/getNewGuessWord';

function resetGame() {
    return {
        type: RESET_GAME,
        guessWord: getNewGuessWord()
    }
}
export default resetGame;