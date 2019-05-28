import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { resetCards } from "./redux";

function mapStateToProps(state) {
    return {
        cardArray: state.cardState.cardArray
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: numCards => dispatch(resetCards(numCards))
    };
}

export class ConnectedConclusion extends React.Component {
    renderResults(resultClass, resultMessage) {
        const { onClick } = this.props;
        const { cardArray } = this.props;
        const numCards = cardArray.length;
        return (
            <div className={`card conclusion ${resultClass}`}>
                <p>{resultMessage}</p>
                <button type="button" onClick={() => onClick(numCards)}>
                    Play Again
                </button>
            </div>
        );
    }

    render() {
        const { cardArray } = this.props;
        if (cardArray.includes("Up") === false) {
            if (cardArray.includes("Down") === false) {
                return this.renderResults("victory", "You won!");
            } else {
                return this.renderResults("defeat", "You lost!");
            }
        } else {
            return null;
        }
    }
}

const Conclusion = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedConclusion);
export default Conclusion;

ConnectedConclusion.propTypes = {
    cardArray: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func
};

ConnectedConclusion.defaultProps = {
    cardArray: [""],
    onClick: () => {}
};
