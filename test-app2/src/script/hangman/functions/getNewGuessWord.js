const tempWordBank = [
    "DRAGON",
    "STARK",
    "LONGCLAW"
]

function getNewGuessWord() {
    const randomWordIndex = Math.floor(Math.random() * tempWordBank.length);

    return tempWordBank[randomWordIndex];
}
export default getNewGuessWord;