import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import resetGame from '../actions/resetGame';

function mapStateToProps(state) {
    return {
        cardArray: state.cardState.cardArray
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

    renderResults(resultClass, resultMessage) {
        return (
            <div className={"card conclusion " + resultClass}>
                <p>{resultMessage}</p>
                <button onClick={() => this.props.onClick(this.props.cardArray.length)}>Play Again</button>
            </div>
        )
    }

    render() {
        if (this.props.cardArray.includes("Up") == false) {
            if (this.props.cardArray.includes("Down") == false) {
                return (
                    this.renderResults("victory","You won!")
                );
            }
            else {
                return (
                    this.renderResults("defeat","You lost!")
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

ConnectedConclusion.propTypes = {
    cardArray: PropTypes.arrayOf(PropTypes.string)
}