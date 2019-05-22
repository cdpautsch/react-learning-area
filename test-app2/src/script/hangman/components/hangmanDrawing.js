import React from 'react';
import { connect } from 'react-redux';

import { hangmanBodyPaths } from '../constants/hangmanBodyPaths';

function mapStateToProps(state) {
    return {
        numberWrongAnswers: state.hangmanState.wrongLetters.length
    }
}

class ConnectedHangmanDrawing extends React.Component {
    constructor(props) {
        super(props);
    }

    renderHangmanBody(numberWrongAnswers) {
        return (
            hangmanBodyPaths.slice(0,numberWrongAnswers)
        );
    }

    render() {
        const numberWrongAnswers = this.props.numberWrongAnswers;
        const drawnHangmanBody = this.renderHangmanBody(numberWrongAnswers);

        return (
            <svg id="hangman-drawing" viewBox="0 0 100 150">
                <g id="the-platform">
                    {/* Scaffold */}
                    <path d="M30 15 L60 15 L70 25 L70 125 L80 125 L80 20 L65 5 L30 5 L30 15"></path>
                    {/* Platform */}
                    <path d="M5 125 L90 125 L90 135 L5 135 L5 125"></path>
                    {/* Support Beam */}
                    <path d="M60 125 L70 115 L70 105 L50 125"></path>
                </g>
                <g id="the-rope">
                    {/* Noose Rope */}
                    <path d="M37 40 L37 15"></path>
                    {/* Noose */}
                    <ellipse cx="27" cy="40" rx="10" ry="3"></ellipse>
                </g>
                <g id="the-hangman">
                    {numberWrongAnswers >= 1 ? <circle cx="25" cy="30" r="5"></circle> : null}
                    {drawnHangmanBody}
                </g>
            </svg>
        )
    }
}

const HangmanDrawing = connect(mapStateToProps)(ConnectedHangmanDrawing);
export default HangmanDrawing;