import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { resetCards } from './redux';
import { DEFAULT_CARD_NUM } from './utils/constants';

export class CardsInput extends React.Component {
    constructor(props) {
        super(props);

        const { currentCardNum } = this.props;

        this.state = {
            numCards: currentCardNum
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        const { resetAction } = this.props;
        resetAction(e.target.value);
        this.setState({
            numCards: e.target.value
        });
    }

    handleClick() {
        const { resetAction } = this.props;
        const { numCards } = this.state;

        resetAction(numCards);
    }

    renderOptions() {
        const totalCardOptions = DEFAULT_CARD_NUM + 1;
        const optionList = Array(totalCardOptions).fill(null);

        for (let i = 0; i < totalCardOptions; i++) {
            optionList[i] = i + DEFAULT_CARD_NUM;
        }

        return optionList.map(number => {
            return (
                <option key={number} value={number}>
                    {number}
                </option>
            );
        });
    }

    render() {
        const renderedArray = this.renderOptions();
        const { numCards } = this.state;

        return (
            <div className="cards-input">
                <p>Select the number of cards to play with:</p>
                <select value={numCards} onChange={this.handleChange}>
                    {renderedArray}
                </select>
                <button type="button" onClick={this.handleClick}>
                    Reset
                </button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardsInput);

function mapStateToProps(state) {
    return {
        currentCardNum: state.cardState.cardArray.length
    };
}

function mapDispatchToProps(dispatch) {
    return {
        resetAction: numCards => dispatch(resetCards(numCards))
    };
}

CardsInput.propTypes = {
    currentCardNum: PropTypes.number,
    resetAction: PropTypes.func
};

CardsInput.defaultProps = {
    currentCardNum: DEFAULT_CARD_NUM,
    resetAction: () => {}
};
