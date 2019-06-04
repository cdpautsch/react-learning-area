import * as actions from './actions';
import * as types from './types';
import * as constants from '../utils/constants';

expect.extend({
    toMatchAllArray(receivedArray, regex) {
        for (let i = 0; i < receivedArray.length; i++) {
            if (!receivedArray[i].match(regex)) {
                return {
                    message: () =>
                        `expected all cells of ${receivedArray} to match regex ${regex}`,
                    pass: false
                };
            }
        }

        return {
            message: () =>
                `expected all cells of ${receivedArray} not to match regex ${regex}`,
            pass: true
        };
    }
});

describe('card actions', () => {
    it('should return an object identifying the card to be marked as removed', () => {
        const id = 1;
        const expectedAction = {
            type: types.REMOVE_CARD,
            cardId: id
        };
        expect(actions.removeCard(id)).toEqual(expectedAction);
    });

    it('should provide an entirely new set of cards upon reset', () => {
        const cardNum = constants.DEFAULT_CARD_NUM;
        const expectedLength = cardNum;
        const expectedValueRegex = /Up|Down/;

        const receivedAction = actions.resetCards(cardNum);

        expect(receivedAction.type).toEqual(types.RESET_CARDS);

        expect(receivedAction.cardArray).toHaveLength(expectedLength);

        expect(receivedAction.cardArray).toMatchAllArray(expectedValueRegex);
    });
});
