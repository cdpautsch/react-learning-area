import { wordBank } from '../constants/animalWordBank';

function getNewGuessWord() {
    const randomWordIndex = Math.floor(Math.random() * wordBank.length);

    return wordBank[randomWordIndex];
}
export default getNewGuessWord;