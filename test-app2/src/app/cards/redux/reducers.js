import * as types from './types';
import { removeAndFlipCards, createNewArray } from '../utils/functions';
import { DEFAULT_CARD_NUM } from '../utils/constants';

export const initialCardState = {
    cardArray: createNewArray(DEFAULT_CARD_NUM)
};

function cardReducer(state = initialCardState, action) {
    switch (action.type) {
        case types.REMOVE_CARD:
            return Object.assign({}, state, {
                cardArray: removeAndFlipCards(
                    state.cardArray.slice(),
                    action.cardId
                )
            });
        case types.RESET_CARDS:
            return Object.assign({}, state, {
                cardArray: action.cardArray
            });
        default:
            return state;
    }
}
export default cardReducer;
