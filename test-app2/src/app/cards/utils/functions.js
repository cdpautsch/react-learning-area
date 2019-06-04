export function createNewArray(length) {
    const newArray = Array(length).fill(null);
    let countUp = 0;

    for (let i = 0; i < length; i++) {
        newArray[i] = Math.floor(Math.random() * 2) === 1 ? 'Up' : 'Down';
        countUp += newArray[i] === 'Up' ? 1 : 0;
    }

    // Ensures at least one cell is face-up
    if (countUp === 0) {
        const n = Math.floor(Math.random() * 6);
        newArray[n] = 'Up';
    }

    return newArray;
}

export function removeAndFlipCards(cardArray, indexToRemove) {
    if (cardArray[indexToRemove] !== 'Up') {
        return cardArray;
    }

    // Flip Left Card
    if (indexToRemove > 0) {
        cardArray[indexToRemove - 1] = flipCard(cardArray[indexToRemove - 1]);
    }

    // Flip Right Card
    if (indexToRemove < cardArray.length - 1) {
        cardArray[indexToRemove + 1] = flipCard(cardArray[indexToRemove + 1]);
    }

    // Remove Selected Card
    cardArray[indexToRemove] = 'Removed';

    return cardArray;
}

export function flipCard(cardValue) {
    if (cardValue !== 'Removed') {
        return cardValue === 'Down' ? 'Up' : 'Down';
    }
    return cardValue;
}
