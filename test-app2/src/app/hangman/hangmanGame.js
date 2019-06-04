import React from 'react';

import Hangman from './hangman';
import HangmanWrong from './hangmanWrong';
import HangmanInput from './hangmanInput';
import HangmanConclusion from './hangmanConclusion';

function HangmanGame() {
    return (
        <div className="hangman-game content">
            <div className="game-intro">
                <h2>Hangman Game</h2>
                <p>
                    Hangman is a guessing game. A random word will be generated,
                    and you must try to guess it by suggesting letters, within a
                    certain number of guesses.
                </p>
            </div>
            <div className="color-bar" />
            <Hangman />
            <HangmanConclusion />
            <div className="color-bar" />
            <HangmanWrong />
            <div className="color-bar" />
            <HangmanInput />
        </div>
    );
}
export default HangmanGame;
