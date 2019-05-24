import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import uuidv1 from "uuid";

import HangmanLetter from "./hangmanLetter";
import HangmanDrawing from "./hangmanDrawing";

function mapStateToProps(state) {
    return {
        rightLetters: state.hangmanState.rightLetters
    };
}

class ConnectedHangman extends React.Component {
    constructor(props) {
        super(props);

        this.renderLetters = this.renderLetters.bind(this);
    }

    renderLetters(letterArray) {
        return letterArray.map(letter => {
            return (
                <HangmanLetter
                    key={uuidv1()}
                    letter={letter}
                    className={letter === " " ? "space" : "letter"}
                />
            );
        });
    }

    render() {
        const { rightLetters } = this.props;
        const renderedLetters = this.renderLetters(rightLetters);

        return (
            <div className="hangman">
                <HangmanDrawing />
                <ul>{renderedLetters}</ul>
            </div>
        );
    }
}

const Hangman = connect(mapStateToProps)(ConnectedHangman);
export default Hangman;

ConnectedHangman.propTypes = {
    rightLetters: PropTypes.arrayOf(PropTypes.string)
};

ConnectedHangman.defaultProps = {
    rightLetters: []
};
