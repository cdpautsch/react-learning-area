import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { removeCard } from './redux';
import Card from './card';

export class CardsDeck extends React.Component {
    renderCards(cardArray) {
        const { onClick } = this.props;

        return cardArray.map((status, index) => {
            return (
                <Card
                    status={status}
                    key={index.toString()}
                    onClick={() => onClick(index)}
                />
            );
        });
    }

    render() {
        const { cardArray } = this.props;

        const renderedArray = this.renderCards(cardArray);

        return <div className="cards-deck">{renderedArray}</div>;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardsDeck);

function mapStateToProps(state) {
    return {
        cardArray: state.cardState.cardArray
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: index => dispatch(removeCard(index))
    };
}

CardsDeck.propTypes = {
    cardArray: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func
};

CardsDeck.defaultProps = {
    cardArray: ['Up'],
    onClick: () => {}
};
