import React from 'react';
import PropTypes from 'prop-types';

class HangmanLetter extends React.Component {
    render() {
        return (
            <li className={this.props.className}>
                {this.props.letter}
            </li>
        );
    }
}
export default HangmanLetter;

HangmanLetter.propTypes = {
    letter: PropTypes.string,
    className: PropTypes.string,
    index: PropTypes.number
}