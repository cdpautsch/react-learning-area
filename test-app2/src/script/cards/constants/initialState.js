import { createNewArray } from '../functions/cardFunctions';
import { DEFAULT_CARD_NUM } from '../constants/globalConstants';

export const initialCardState = {
    cardArray: createNewArray(DEFAULT_CARD_NUM)
};