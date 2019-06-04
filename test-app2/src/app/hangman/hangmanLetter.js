import React from 'react';
import PropTypes from 'prop-types';

function HangmanLetter(props) {
    const { className, letter } = props;
    return <li className={className}>{letter}</li>;
}
export default HangmanLetter;

HangmanLetter.propTypes = {
    letter: PropTypes.string,
    className: PropTypes.string
};

HangmanLetter.defaultProps = {
    letter: '',
    className: 'letter'
};
