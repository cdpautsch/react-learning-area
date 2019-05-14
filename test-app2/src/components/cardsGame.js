import React from 'react';

class CardsDeck extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cardsDeck">
                <p>TEMP</p>
            </div>
        );
    }
}

class CardsGame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cardsGame">
                <div className="gameIntro">
                    <h1>Cards Problem</h1>
                    <p>This challenge is about a simple card flipping solitaire game. You're presented with a sequence of cards, some face up, some face down. You can remove any face up card, but you must then flip the adjacent cards (if any). The goal is to successfully remove every card. Making the wrong move can get you stuck.</p>
                </div>
                <CardsDeck />
            </div>
        )
    }
}
export default CardsGame;