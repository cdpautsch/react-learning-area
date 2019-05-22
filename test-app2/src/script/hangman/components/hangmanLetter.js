import React from 'react';

function HangmanLetter(props) {
    return (
        <li className={props.className}>
            {props.letter}
        </li>
    )
}
export default HangmanLetter;