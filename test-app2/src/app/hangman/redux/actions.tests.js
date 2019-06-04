import * as actions from './actions';
import * as types from './types';
import wordBank from '../data/animalWordBank';

expect.extend({
    toBeContainedIn(value, array) {
        const pass = array.includes(value);

        if (pass) {
            return {
                message: () =>
                    `expected ${value} not to be in provided array of ${
                        array.length
                    } values`,
                pass: true
            };
        } else {
            return {
                message: () =>
                    `expected ${value} to be in provided array of ${
                        array.length
                    } values`,
                pass: false
            };
        }
    }
});

describe('hangman actions', () => {
    it('should return an object identifying uppercase letter to guess', () => {
        const letter = 'a';
        const expectedAction = {
            type: types.GUESS_LETTER,
            guessLetter: 'A'
        };
        expect(actions.guessLetter(letter)).toEqual(expectedAction);
    });

    it('should return an object containing a new word from the bank', () => {
        expect(actions.resetHangman().guessWord).toBeContainedIn(wordBank);
    });
});
