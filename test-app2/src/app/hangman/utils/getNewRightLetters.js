function getNewRightLetters(guessWord) {
    const rightLetters = Array(guessWord.length).fill('');

    for (let i = 0; i < guessWord.length; i++) {
        if (guessWord[i] === ' ') {
            rightLetters[i] = ' ';
        }
    }

    return rightLetters;
}
export default getNewRightLetters;
