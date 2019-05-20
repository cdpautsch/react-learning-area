import { RESET_GAME } from '../constants/actionTypes';
import { createNewArray } from '../functions/cardFunctions';

function resetGame(cardNum) {
    return {
        type: RESET_GAME,
        cardArray: createNewArray(cardNum)
    }
}
export default resetGame;