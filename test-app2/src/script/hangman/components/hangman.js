import React from 'react';
import { connect } from 'react-redux';

import HangmanLetter from './hangmanLetter';
import HangmanDrawing from './HangmanDrawing';

function mapStateToProps(state) {
    return {
        rightLetters: state.hangmanState.rightLetters
    }
}

class ConnectedHangman extends React.Component {
    constructor(props) {
        super(props);
    }

    renderLetters(letterArray) {
        return (
            letterArray.map((letter,index) => {
                return (
                    <HangmanLetter
                        key={index.toString()}
                        letter={letter}
                        index={index}
                        className={"letter"}
                    />
                );
            })
        );
    }

    render() {
        const rightLetters = this.props.rightLetters;
        const renderedLetters = this.renderLetters(rightLetters);

        return (
            <div className="hangman">
                <HangmanDrawing />
                <ul>
                    {renderedLetters}
                </ul>
            </div>
        )
    }
}

const Hangman = connect(mapStateToProps)(ConnectedHangman);
export default Hangman;