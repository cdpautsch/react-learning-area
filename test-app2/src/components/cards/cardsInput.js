import React from 'react';

class CardsInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onSelectChange(e.target.value);
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
        const numCards = this.props.numCards;

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
export default CardsInput;