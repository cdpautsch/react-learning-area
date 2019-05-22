import React from 'react';
import { connect } from 'react-redux';

import resetGame from '../actions/resetGame';
import { MAX_WRONG_ANSWERS } from '../constants/globalConstants';

function mapStateToProps(state) {
    return {
        numEmptyLetters: state.hangmanState.rightLetters.length - state.hangmanState.rightLetters.filter(String).length,
        numWrongLetters: state.hangmanState.wrongLetters.length,
        guessWord: state.hangmanState.guessWord
    };
}

function mapDispatchToProps(dispatch) {
    return {
        resetAction: () => dispatch(resetGame())
    };
}

class ConnectedHangmanConclusion extends React.Component {
    constructor(props) {
        super(props);
    }

    renderResults(resultClass, resultMessage) {
        return (
            <div className={"conclusion " + resultClass}>
                <p>{resultMessage}</p>
                <button
                    onClick={this.props.resetAction}
                >Play Again</button>
            </div>
        )
    }

    render() {
        if (this.props.numEmptyLetters <= 0) {
            return this.renderResults("victory","Victory! You guessed all the letters correctly!");
        }
        else if (this.props.numWrongLetters >= MAX_WRONG_ANSWERS) {
            return this.renderResults("defeat","Defeat! You have run out of guesses. The word was '" + this.props.guessWord + "'.");
        }
        else {
            return null;
        }
    }
}

const HangmanConclusion = connect(mapStateToProps, mapDispatchToProps)(ConnectedHangmanConclusion);
export default HangmanConclusion;