import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import homeReducer from './views/pages/Home/_homeReducer';

const store = createStore(homeReducer, applyMiddleware(ReduxPromise));

export default store;