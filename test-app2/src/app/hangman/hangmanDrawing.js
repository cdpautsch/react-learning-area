import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import hangmanBodyPaths from './utils/hangmanBodyPaths';

class HangmanDrawing extends React.Component {
    renderHangmanBody(numberWrongAnswers) {
        return hangmanBodyPaths.slice(0, numberWrongAnswers);
    }

    render() {
        const { numberWrongAnswers } = this.props;
        const drawnHangmanBody = this.renderHangmanBody(numberWrongAnswers);

        return (
            <svg id="hangman-drawing" viewBox="0 0 100 150">
                <g id="the-platform">
                    {/* Scaffold */}
                    <path
                        d="M30 15 L60 15 L70 25 L70 125
                        L80 125 L80 20 L65 5 L30 5 L30 15"
                    />
                    {/* Platform */}
                    <path d="M5 125 L90 125 L90 135 L5 135 L5 125" />
                    {/* Support Beam */}
                    <path d="M60 125 L70 115 L70 105 L50 125" />
                </g>
                <g id="the-rope">
                    {/* Noose Rope */}
                    <path d="M37 40 L37 15" />
                    {/* Noose */}
                    <ellipse cx="27" cy="40" rx="10" ry="3" />
                </g>
                <g id="the-hangman">
                    {numberWrongAnswers >= 1 ? (
                        <circle cx="25" cy="30" r="5" />
                    ) : null}
                    {drawnHangmanBody}
                </g>
            </svg>
        );
    }
}

export default connect(mapStateToProps)(HangmanDrawing);

function mapStateToProps(state) {
    return {
        numberWrongAnswers: state.hangmanState.wrongLetters.length
    };
}

HangmanDrawing.propTypes = {
    numberWrongAnswers: PropTypes.number
};

HangmanDrawing.defaultProps = {
    numberWrongAnswers: 0
};
