import { INITIAL_LOAD } from '../constants/actionTypes';
import { createNewArray } from '../functions/cardFunctions';
import { DEFAULT_CARD_NUM } from '../constants/globalConstants';

function initialLoad() {
    return {
        type: INITIAL_LOAD,
        cardArray: createNewArray(DEFAULT_CARD_NUM)
    }
}
export default initialLoad;