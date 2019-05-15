import React from 'react';

function Card(props) {
    let fullClass = "card";

    if (props.status === "Up") {
        fullClass += " face-up";
    }
    else if (props.status === "Down") {
        fullClass += " face-down";
    }
    else {
        fullClass += " removed";
    }

    return (
        <button
            className={fullClass}
            type="button"
            onClick={props.onClick}
        >
            {props.status}
        </button>
    );
}

function Conclusion(props) {
    return (
        <div className="card conclusion">
            <p>{props.result}</p>
            <button onClick={props.onClick}>Play Again</button>
        </div>
    )
}

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

class CardsGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numCards: 5,
            cardArray: this.initializeCards(5)
        }

        this.handleRemoveCard = this.handleRemoveCard.bind(this);
        this.resetCards = this.resetCards.bind(this);
        this.handleNumCardChange = this.handleNumCardChange.bind(this);
    }

    handleNumCardChange(newNumCards) {
        this.setState({
            numCards: newNumCards,
            cardArray: this.initializeCards(newNumCards),
        });
    }

    initializeCards(length) {
        const newArray = Array(length).fill(null);
        for (let i=0; i < length; i++) {
            newArray[i] = Math.floor(Math.random()*2) === 1 ? "Up" : "Down";
        }
        return newArray;
    }

    resetCards() {
        const numCards = this.state.numCards;

        this.setState({
            cardArray: this.initializeCards(numCards)
        });
    }

    handleRemoveCard(i) {
        const cardArray = this.state.cardArray.slice();

        if (cardArray[i] !== "Up") {
            return;
        }

        const numCards = cardArray.length;

        // Flip Left Card
        if (i > 0) {
            // for (let n=i-1; n>=0; n--) {
            //     if (cardArray[n] !== "Removed") {
            //         this.flipCard(n,cardArray);
            //         break;
            //     }
            // }

            this.flipCard(i-1,cardArray);
        }

        // Flip Right Card
        if (i < numCards-1) {
            // for (let n=i+1; n<numCards; n++) {
            //     if (cardArray[n] !== "Removed") {
            //         this.flipCard(n,cardArray);
            //         break;
            //     }
            // }

            this.flipCard(i+1,cardArray);
        }
        
        // Remove Selected Card
        // const splicedArray = cardArray.slice(0,i).concat(cardArray.slice(i+1,numCards));
        cardArray[i] = "Removed";

        this.setState({
            //cardArray: splicedArray
            cardArray: cardArray
        });
    }

    flipCard(index,cardArray) {
        if (cardArray[index] !== "Removed") {
            cardArray[index] = cardArray[index] === "Down" ? "Up" : "Down";
        }
    }

    determineWin() {
        if (this.state.cardArray.includes("Up") == false) {
            if (this.state.cardArray.includes("Down") == false) {
                return (<Conclusion result="You Won!" onClick={this.resetCards} />);
            }
            else {
                return (<Conclusion result="You lost! No more viable moves." onClick={this.resetCards} />);
            }
        }
        else {
            return null;
        }
    }

    render() {
        const cardArray = this.state.cardArray;

        return (
            <div className="cardsGame content">
                <div className="game-intro">
                    <h2>Cards Problem</h2>
                    <p>This challenge is about a simple card flipping solitaire game. You're presented with a sequence of cards, some face up, some face down. You can remove any face up card, but you must then flip the adjacent cards (if any). The goal is to successfully remove every card. Making the wrong move can get you stuck.</p>
                </div>
                <div className="color-bar"></div>
                <CardsInput onSelectChange={this.handleNumCardChange} />
                <div className="color-bar"></div>
                <CardsDeck
                    cardArray={cardArray}
                    onClick={(i) => this.handleRemoveCard(i)}
                />
                {this.determineWin()}
            </div>
        )
    }
}
export default CardsGame;