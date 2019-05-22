import React from 'react';

import Conclusion from './conclusion';
import CardsDeck from './cardsDeck';
import CardsInput from './cardsInput';

class CardsGame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cards-game content">
                <div className="game-intro">
                    <h2>Cards Problem</h2>
                    <p>This challenge is about a simple card flipping solitaire game. You're presented with a sequence of cards, some face up, some face down. You can remove any face up card, but you must then flip the adjacent cards (if any). The goal is to successfully remove every card. Making the wrong move can get you stuck.</p>
                </div>
                <div className="color-bar"></div>
                <CardsInput />
                <div className="color-bar"></div>
                <CardsDeck />
                <Conclusion />
            </div>
        )
    }
}
export default CardsGame;