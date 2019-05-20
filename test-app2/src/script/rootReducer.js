import cardReducer from './cards/reducers/cardReducer';

function rootReducer(state = {}, action) {
    return {
        cardArray: cardReducer(state.cardArray, action)
    }
}
export default rootReducer;