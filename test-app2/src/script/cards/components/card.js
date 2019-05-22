import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
    let fullClass = "card";

    if (props.status === "Up") {
        fullClass += " face-up";
    }
    else if (props.status === "Down") {
        fullClass += " face-down";
    }
    else {
        fullClass += " removed";
    }

    return (
        <button
            className={fullClass}
            type="button"
            onClick={props.onClick}
        >
            {props.status}
        </button>
    );
}
export default Card;

Card.propTypes = {
    status: PropTypes.oneOf(["Up","Down","Removed"])
}