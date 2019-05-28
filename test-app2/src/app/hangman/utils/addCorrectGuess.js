function addCorrectGuess(rightLetters, guessLetter, guessWord) {
    for (let i = 0; i < guessWord.length; i++) {
        if (guessWord[i] === guessLetter) {
            rightLetters[i] = guessLetter;
        }
    }

    return {
        rightLetters
    };
}
export default addCorrectGuess;
