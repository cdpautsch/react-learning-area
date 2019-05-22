import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import removeCard from '../actions/removeCard';
import Card from './card';

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

class ConnectedCardsDeck extends React.Component {
    constructor(props) {
        super(props);
    }

    renderCards(cardArray) {
        return (
            cardArray.map((status,index) => {
                return (
                    <Card
                        status={status}
                        key={index.toString()}
                        onClick={() => this.props.onClick(index)}
                    />
                );
            })
        );
    }

    render() {
        const cardArray = this.props.cardArray;

        const renderedArray = this.renderCards(cardArray);

        return (
            <div className="cards-deck">
                {renderedArray}
            </div>
        );
    }
}

const CardsDeck = connect(mapStateToProps, mapDispatchToProps)(ConnectedCardsDeck);
export default CardsDeck;

ConnectedCardsDeck.propTypes = {
    cardArray: PropTypes.arrayOf(PropTypes.string)
};