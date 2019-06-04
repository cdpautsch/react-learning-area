function addWrongGuess(wrongLetters, guessLetter) {
    if (wrongLetters.includes(guessLetter) || guessLetter === ' ') {
        return {
            wrongLetters
        };
    } else {
        return {
            wrongLetters: wrongLetters.concat(guessLetter)
        };
    }
}
export default addWrongGuess;
