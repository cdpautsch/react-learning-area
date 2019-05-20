import React from 'react';
import { connect } from 'react-redux';

import { DEFAULT_CARD_NUM } from '../constants/globalConstants';
import resetGame from '../actions/resetGame';

function mapStateToProps(state) {
    return {
        currentCardNum: state.cardArray.length
    }
}

function mapDispatchToProps(dispatch) {
    return {
        resetAction: numCards => dispatch(resetGame(numCards))
    };
}

class ConnectedCardsInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numCards: this.props.currentCardNum
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.resetAction(e.target.value);
        this.setState({
            numCards: e.target.value
        });
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
            </div>
        )
    }
}

const CardsInput = connect(mapStateToProps,mapDispatchToProps)(ConnectedCardsInput);
export default CardsInput;