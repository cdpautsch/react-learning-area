import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { guessLetter } from './redux';
import { MAX_WRONG_ANSWERS } from './utils/constants';

class HangmanInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            letterValue: ''
        };

        this.letterInput = React.createRef();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.letterInput.current.focus();
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
        const { letterValue } = this.state;
        const { guessAction } = this.props;

        if (letterValue.length === 1) {
            guessAction(letterValue);
        }

        this.letterInput.current.focus();

        this.setState({
            letterValue: ''
        });
    }

    render() {
        const { letterValue } = this.state;
        const { gameOver } = this.props;

        return (
            <div className="hangman-input">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="letter-input">
                        Choose your next letter:
                        <input
                            id="letter-input"
                            type="text"
                            value={letterValue}
                            onChange={this.handleChange}
                            ref={this.letterInput}
                            disabled={gameOver ? 'disabled' : ''}
                        />
                    </label>
                    <input
                        type="submit"
                        value="Submit"
                        disabled={gameOver ? 'disabled' : ''}
                    />
                </form>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HangmanInput);

function mapStateToProps(state) {
    return {
        gameOver:
            state.hangmanState.wrongLetters.length >= MAX_WRONG_ANSWERS ||
            state.hangmanState.rightLetters.length -
                state.hangmanState.rightLetters.filter(String).length <=
                0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        guessAction: letter => dispatch(guessLetter(letter))
    };
}

HangmanInput.propTypes = {
    gameOver: PropTypes.bool,
    guessAction: PropTypes.func
};

HangmanInput.defaultProps = {
    gameOver: true,
    guessAction: () => {}
};
