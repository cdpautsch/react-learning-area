import React from 'react';

function Conclusion(props) {
    return (
        <div className="card conclusion">
            <p>{props.result}</p>
            <button onClick={props.onClick}>Play Again</button>
        </div>
    )
}
export default Conclusion;