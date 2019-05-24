import { createNewArray } from "../functions/cardFunctions";
import { DEFAULT_CARD_NUM } from "./globalConstants";

const initialCardState = {
    cardArray: createNewArray(DEFAULT_CARD_NUM)
};
export default initialCardState;
