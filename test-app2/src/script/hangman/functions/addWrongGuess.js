function addWrongGuess(wrongLetters, guessLetter) {
    if (wrongLetters.includes(guessLetter)) {
        return {
            wrongLetters: wrongLetters
        }
    }
    else {
        return {
            wrongLetters: wrongLetters.concat(guessLetter)
        }
    }
}
export default addWrongGuess;