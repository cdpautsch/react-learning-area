import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
    let fullClass = 'card';
    const { status, onClick } = props;

    if (status === 'Up') {
        fullClass += ' face-up';
    } else if (status === 'Down') {
        fullClass += ' face-down';
    } else {
        fullClass += ' removed';
    }

    return (
        <button className={fullClass} type="button" onClick={onClick}>
            {status}
        </button>
    );
}
export default Card;

Card.propTypes = {
    status: PropTypes.oneOf(['Up', 'Down', 'Removed']),
    onClick: PropTypes.func
};

Card.defaultProps = {
    status: 'Up',
    onClick: () => {}
};
