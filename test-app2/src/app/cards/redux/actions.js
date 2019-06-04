import * as types from './types';
import { createNewArray } from '../utils/functions';

export function removeCard(id) {
    return {
        type: types.REMOVE_CARD,
        cardId: id
    };
}

export function resetCards(cardNum) {
    return {
        type: types.RESET_CARDS,
        cardArray: createNewArray(cardNum)
    };
}
