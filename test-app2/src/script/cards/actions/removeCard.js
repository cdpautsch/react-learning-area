import { REMOVE_CARD } from '../constants/actionTypes';

function removeCard(id) {
    return {
        type: REMOVE_CARD,
        cardId: id
    }
}
export default removeCard;