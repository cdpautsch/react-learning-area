import { REMOVE_CARD, RESET_CARDS } from "../constants/actionTypes";
import { removeAndFlipCards } from "../functions/cardFunctions";
import initialCardState from "../constants/initialState";

function cardReducer(state = initialCardState, action) {
    switch (action.type) {
        case REMOVE_CARD:
            return Object.assign({}, state, {
                cardArray: removeAndFlipCards(
                    state.cardArray.slice(),
                    action.cardId
                )
            });
        case RESET_CARDS:
            return Object.assign({}, state, {
                cardArray: action.cardArray
            });
        default:
            return state;
    }
}
export default cardReducer;
