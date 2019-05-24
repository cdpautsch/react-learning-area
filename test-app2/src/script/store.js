import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(
    rootReducer,
    // Disabling ESLint for this line
    // Redux devtools is written as specified by documentation
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
