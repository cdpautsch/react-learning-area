import React from 'react';

import Hangman from './Hangman';
import HangmanWrong from './hangmanWrong';
import HangmanInput from './HangmanInput';
import HangmanConclusion from './hangmanConclusion';

class HangmanGame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hangman-game content">
                <div className="game-intro">
                    <h2>Hangman Game</h2>
                    <p>
                    Hangman is a guessing game. A random word will be generated, and you must try to guess it by suggesting letters, within a certain number of guesses.
                    </p>
                </div>
                <div className="color-bar"></div>
                <Hangman />
                <HangmanConclusion />
                <div className="color-bar"></div>
                <HangmanWrong />
                <div className="color-bar"></div>
                <HangmanInput />
            </div>
        )
    }
}
export default HangmanGame;