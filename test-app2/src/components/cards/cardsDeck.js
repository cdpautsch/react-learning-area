import React from 'react';

import Card from './card';

class CardsDeck extends React.Component {
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
export default CardsDeck;