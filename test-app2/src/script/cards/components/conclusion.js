import React from 'react';
import { connect } from 'react-redux';

import resetGame from '../actions/resetGame';

function mapStateToProps(state) {
    return {
        cardArray: state.cardArray
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: numCards => dispatch(resetGame(numCards))
    }
}

class ConnectedConclusion extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.cardArray.includes("Up") == false) {
            if (this.props.cardArray.includes("Down") == false) {
                return (
                    <div className="card conclusion">
                        <p>You won!</p>
                        <button onClick={this.props.onClick}>Play Again</button>
                    </div>
                );
            }
            else {
                return (
                    <div className="card conclusion">
                        <p>You lost! No more viable moves.</p>
                        <button onClick={() => this.props.onClick(this.props.cardArray.length)}>Play Again</button>
                    </div>
                );
            }
        }
        else {
            return null;
        }
    }
}

const Conclusion = connect(mapStateToProps, mapDispatchToProps)(ConnectedConclusion);
export default Conclusion;