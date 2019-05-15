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

    renderCards(tempArray) {
        return (
            tempArray.map((status,index) => {
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
        const tempArray = this.props.cardArray;

        const renderedArray = this.renderCards(tempArray);

        return (
            <div className="cards-deck">
                {renderedArray}
            </div>
        );
    }
}

class CardsGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardArray: ["Up","Down","Down","Up","Up"]
            // cardArray: Array(7).fill(null)
        }

        this.handleClick = this.handleClick.bind(this);
        this.resetCards = this.resetCards.bind(this);

        //this.initializeCards();
    }

    resetCards() {
        this.setState({
            cardArray: ["Up","Down","Down","Up","Up"]
        });
    }

    handleClick(i) {
        // Removes a card

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
        // if (this.state.cardArray.length == 0) {
        //     return (<Conclusion result="You Won!" onClick={this.resetCards} />);
        // }
        // else if (this.state.cardArray.includes("Up") == false) {
        //     return (<Conclusion result="You lost! No more viable moves." onClick={this.resetCards} />);
        // }
        // else {
        //     return null;
        // }

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
                <CardsDeck
                    cardArray={cardArray}
                    onClick={(i) => this.handleClick(i)}
                />
                {this.determineWin()}
            </div>
        )
    }
}
export default CardsGame;