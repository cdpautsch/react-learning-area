import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import resetCards from '../actions/resetCards';

function mapStateToProps(state) {
    return {
        currentCardNum: state.cardState.cardArray.length
    }
}

function mapDispatchToProps(dispatch) {
    return {
        resetAction: numCards => dispatch(resetCards(numCards))
    };
}

class ConnectedCardsInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numCards: this.props.currentCardNum
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.props.resetAction(e.target.value);
        this.setState({
            numCards: e.target.value
        });
    }

    handleClick() {
        this.props.resetAction(this.state.numCards);
    }

    renderOptions() {
        const optionList = Array(6).fill(null);

        for (let i=0; i < 6; i++) {
            optionList[i] = i+5;
        }

        return (
            optionList.map((number) => {
                return (
                    <option
                        key={number}
                        value={number}
                    >
                        {number}
                    </option>
                )
            })
        )
    }

    render() {
        const renderedArray = this.renderOptions();
        const numCards = this.state.numCards;

        return (
            <div className="cards-input">
                <p>Select the number of cards to play with:</p>
                <select
                    value={numCards}
                    onChange={this.handleChange}
                >
                    {renderedArray}
                </select>
                <button onClick={this.handleClick}>Reset</button>
            </div>
        )
    }
}

const CardsInput = connect(mapStateToProps,mapDispatchToProps)(ConnectedCardsInput);
export default CardsInput;

ConnectedCardsInput.propTypes = {
    status: PropTypes.number
}