import React from 'react';
import { connect } from 'react-redux';

import guessLetter from '../actions/guessLetter';
import { MAX_WRONG_ANSWERS } from '../constants/globalConstants';

function mapStateToProps(state) {
    return {
        gameOver: (
            state.hangmanState.wrongLetters.length >= MAX_WRONG_ANSWERS
            || state.hangmanState.rightLetters.length - state.hangmanState.rightLetters.filter(String).length <= 0
            ? true : false
        )
    };
}

function mapDispatchToProps(dispatch) {
    return {
        guessAction: letter => dispatch(guessLetter(letter))
    };
}

class ConnectedHangmanInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            letterValue: ""
        };

        this.letterInput = React.createRef();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        if (e.target.value.length <= 1) {
            this.setState({
                letterValue: e.target.value
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.letterValue.length === 1) {
            this.props.guessAction(this.state.letterValue);
        }

        this.letterInput.current.focus();

        this.setState({
            letterValue: ""
        })
    }

    componentDidMount() {
        this.letterInput.current.focus();
    }

    render() {
        return (
            <div className="hangman-input">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Choose your next letter:
                    </label>
                    <input
                        type="text"
                        value={this.state.letterValue}
                        onChange={this.handleChange}
                        ref={this.letterInput}
                        disabled={(this.props.gameOver) ? "disabled" : ""}
                    ></input>
                    <input
                        type="submit"
                        value="Submit"
                        disabled={(this.props.gameOver) ? "disabled" : ""}
                    />
                </form>
            </div>
        )
    }
}

const HangmanInput = connect(mapStateToProps,mapDispatchToProps)(ConnectedHangmanInput);
export default HangmanInput;