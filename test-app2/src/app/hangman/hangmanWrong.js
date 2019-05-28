import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import HangmanLetter from "./hangmanLetter";

function mapStateToProps(state) {
    return {
        wrongLetters: state.hangmanState.wrongLetters
    };
}

class ConnectedHangmanWrong extends React.Component {
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

const HangmanWrong = connect(mapStateToProps)(ConnectedHangmanWrong);
export default HangmanWrong;

ConnectedHangmanWrong.propTypes = {
    wrongLetters: PropTypes.arrayOf(PropTypes.string)
};

ConnectedHangmanWrong.defaultProps = {
    wrongLetters: []
};
