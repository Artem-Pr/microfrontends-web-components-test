import {applyMiddleware, createStore} from 'redux';
import Thunk from 'redux-thunk';
import Logger from 'redux-logger';

import {reducers} from './reducers';

const usedMiddleware = [Thunk];

/* eslint-disable no-undef */
if ('development' === process.env.NODE_ENV) {
    usedMiddleware.push(Logger);
}
/* eslint-enable no-undef */

const middleware = applyMiddleware(...usedMiddleware);

export const store = () => createStore(reducers, middleware);
