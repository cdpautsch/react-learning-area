import { REMOVE_CARD, RESET_GAME, INITIAL_LOAD } from '../constants/actionTypes';
import { DEFAULT_CARD_NUM } from '../constants/globalConstants';
import { removeAndFlipCards, createNewArray } from '../functions/cardFunctions';

const defaultCardArray = ["Up","Down","Down","Down","Down"];

function cardReducer(state = [], action) {
    switch (action.type) {
        case REMOVE_CARD:
            return removeAndFlipCards(state.slice(), action.cardId);
        case RESET_GAME:
            return action.cardArray;
        case INITIAL_LOAD:
            return action.cardArray;
        default:
            return defaultCardArray;
    }
}
export default cardReducer;