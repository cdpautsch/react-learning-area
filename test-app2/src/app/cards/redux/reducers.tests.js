import * as types from './types';
import cardReducer, { initialCardState } from './reducers';

describe('card reducers', () => {
    it('should return the initial state', () => {
        expect(cardReducer(undefined, {})).toEqual(initialCardState);
    });

    const defaultState = {
        cardArray: ['Up', 'Up', 'Down', 'Removed', 'Up']
    };

    it('should mark a valid card as removed and flip adjacent cards', () => {
        const removeLeftAction = { type: types.REMOVE_CARD, cardId: 1 };
        const removedLeftState = {
            cardArray: ['Down', 'Removed', 'Up', 'Removed', 'Up']
        };

        const removeRightAction = { type: types.REMOVE_CARD, cardId: 4 };
        const removedRightState = {
            cardArray: ['Up', 'Up', 'Down', 'Removed', 'Removed']
        };

        expect(cardReducer(defaultState, removeLeftAction)).toEqual(
            removedLeftState
        );

        expect(cardReducer(defaultState, removeRightAction)).toEqual(
            removedRightState
        );
    });

    it('should not remove a card if not face up', () => {
        const removeInvalidAction = { type: types.REMOVE_CARD, cardId: 3 };
        const removedInvalidState = Object.assign({}, defaultState);

        expect(cardReducer(defaultState, removeInvalidAction)).toEqual(
            removedInvalidState
        );
    });

    it('should return an entirely new card deck when reset', () => {
        const newCardArray = ['Down', 'Down', 'Down', 'Down', 'Up'];
        const resetAction = {
            type: types.RESET_CARDS,
            cardArray: newCardArray
        };

        expect(cardReducer(defaultState, resetAction)).toEqual({
            cardArray: newCardArray
        });
    });
});
