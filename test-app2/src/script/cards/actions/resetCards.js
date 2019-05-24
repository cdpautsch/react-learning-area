import { RESET_CARDS } from "../constants/actionTypes";
import { createNewArray } from "../functions/cardFunctions";

function resetCards(cardNum) {
    return {
        type: RESET_CARDS,
        cardArray: createNewArray(cardNum)
    };
}
export default resetCards;
