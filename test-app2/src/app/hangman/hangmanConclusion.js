import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { resetHangman } from './redux';
import { MAX_WRONG_ANSWERS } from './utils/constants';

class HangmanConclusion extends React.Component {
    renderResults(resultClass, resultMessage) {
        const { resetAction } = this.props;
        return (
            <div className={`conclusion ${resultClass}`}>
                <p>{resultMessage}</p>
                <button type="button" onClick={resetAction}>
                    Play Again
                </button>
            </div>
        );
    }

    render() {
        const { numEmptyLetters, numWrongLetters, guessWord } = this.props;

        if (numEmptyLetters <= 0) {
            return this.renderResults(
                'victory',
                'Victory! You guessed all the letters correctly!'
            );
        } else if (numWrongLetters >= MAX_WRONG_ANSWERS) {
            return this.renderResults(
                'defeat',
                `Defeat! You have run out of guesses.
                The word was '${guessWord}'.`
            );
        } else {
            return null;
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HangmanConclusion);

function mapStateToProps(state) {
    return {
        numEmptyLetters:
            state.hangmanState.rightLetters.length -
            state.hangmanState.rightLetters.filter(String).length,
        numWrongLetters: state.hangmanState.wrongLetters.length,
        guessWord: state.hangmanState.guessWord
    };
}

function mapDispatchToProps(dispatch) {
    return {
        resetAction: () => dispatch(resetHangman())
    };
}

HangmanConclusion.propTypes = {
    numEmptyLetters: PropTypes.number,
    numWrongLetters: PropTypes.number,
    guessWord: PropTypes.string,
    resetAction: PropTypes.func
};

HangmanConclusion.defaultProps = {
    numEmptyLetters: 1,
    numWrongLetters: 0,
    guessWord: 'SOMETHING',
    resetAction: () => {}
};
