import * as types from './types';
import hangmanReducer, { initialHangmanState } from './reducers';

describe('hangman reducers', () => {
    it('should return the initial state', () => {
        expect(hangmanReducer(undefined, {})).toEqual(initialHangmanState);
    });

    const defaultState = {
        wrongLetters: [],
        rightLetters: ['', '', ''],
        guessWord: 'CAT'
    };

    it('should add a correct guess in the correct position of the right list', () => {
        const guessAction = {
            type: types.GUESS_LETTER,
            guessLetter: 'C'
        };
        const postGuessState = {
            wrongLetters: [],
            rightLetters: ['C', '', ''],
            guessWord: 'CAT'
        };

        expect(hangmanReducer(defaultState, guessAction)).toEqual(
            postGuessState
        );
    });

    it('should not add a duplicate right answer', () => {
        const guessAction = {
            type: types.GUESS_LETTER,
            guessLetter: 'C'
        };
        const guessState = {
            wrongLetters: [],
            rightLetters: ['C', '', ''],
            guessWord: 'CAT'
        };

        expect(hangmanReducer(guessState, guessAction)).toEqual(guessState);
    });

    it('should add a wrong guess letter at the end of the wrong list', () => {
        const guessLetter = 'Z';
        const guessAction = {
            type: types.GUESS_LETTER,
            guessLetter
        };
        const postGuessState = {
            wrongLetters: ['Z'],
            rightLetters: ['', '', ''],
            guessWord: 'CAT'
        };

        expect(hangmanReducer(defaultState, guessAction)).toEqual(
            postGuessState
        );
    });

    it('should not add a duplicate wrong answer', () => {
        const guessAction = {
            type: types.GUESS_LETTER,
            guessLetter: 'Z'
        };
        const guessState = {
            wrongLetters: ['Z', 'Q'],
            rightLetters: ['', '', ''],
            guessWord: 'CAT'
        };

        expect(hangmanReducer(guessState, guessAction)).toEqual(guessState);
    });

    it('should not mark spaces as wrong answers', () => {
        const guessAction = {
            type: types.GUESS_LETTER,
            guessLetter: ' '
        };
        const guessState = {
            wrongLetters: ['Z'],
            rightLetters: ['', '', ''],
            guessWord: 'CAT'
        };

        expect(hangmanReducer(guessState, guessAction)).toEqual(guessState);
    });

    it('should not mark spaces as right answers', () => {
        const guessAction = {
            type: types.GUESS_LETTER,
            guessLetter: ' '
        };
        const guessState = {
            wrongLetters: [],
            rightLetters: ['', '', '', ' ', '', '', ''],
            guessWord: 'BIG CAT'
        };

        expect(hangmanReducer(guessState, guessAction)).toEqual(guessState);
    });

    it('should pre-mark spaces in new guess words', () => {
        const resetAction = {
            type: types.RESET_HANGMAN,
            guessWord: 'BIG CAT'
        };
        const stateWithSpace = {
            wrongLetters: [],
            rightLetters: ['', '', '', ' ', '', '', ''],
            guessWord: 'BIG CAT'
        };

        expect(hangmanReducer({}, resetAction)).toEqual(stateWithSpace);
    });
});
