import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
// import { thunkMiddleware } from 'redux-thunk';

import rootReducer from './rootReducer';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(loggerMiddleware),
        // Disabling ESLint for this line
        // Redux devtools is written as specified by documentation
        // eslint-disable-next-line no-underscore-dangle
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            // eslint-disable-next-line no-underscore-dangle
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store;
