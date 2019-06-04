import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HangmanLetter from './hangmanLetter';

class HangmanWrong extends React.Component {
    renderWrongLetters(letterArray) {
        return letterArray.map((letter, index) => {
            return (
                <HangmanLetter
                    key={index.toString()}
                    letter={letter}
                    index={index}
                    className="wrong-letter"
                />
            );
        });
    }

    render() {
        const { wrongLetters } = this.props;
        const renderedWrongLetters = this.renderWrongLetters(wrongLetters);

        return (
            <div className="hangman-wrong">
                <p className="wrong-letters-title">Wrong Letters:</p>
                <ul>{renderedWrongLetters}</ul>
            </div>
        );
    }
}

export default connect(mapStateToProps)(HangmanWrong);

function mapStateToProps(state) {
    return {
        wrongLetters: state.hangmanState.wrongLetters
    };
}

HangmanWrong.propTypes = {
    wrongLetters: PropTypes.arrayOf(PropTypes.string)
};

HangmanWrong.defaultProps = {
    wrongLetters: []
};
