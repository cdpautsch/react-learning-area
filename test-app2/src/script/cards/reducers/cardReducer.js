import { REMOVE_CARD, RESET_GAME, INITIAL_LOAD } from '../constants/actionTypes';
import { removeAndFlipCards, createNewArray } from '../functions/cardFunctions';
import { initialCardState } from '../constants/initialState';

function cardReducer(state = initialCardState, action) {
    switch (action.type) {
        case REMOVE_CARD:
            return Object.assign({}, state, {
                cardArray: removeAndFlipCards(state.cardArray.slice(), action.cardId)
            });
        case RESET_GAME:
            return Object.assign({}, state, {
                cardArray: action.cardArray
            });
        case INITIAL_LOAD:
            return Object.assign({}, state, {
                cardArray: action.cardArray
            });
        default:
            return state;
    }
}
export default cardReducer;