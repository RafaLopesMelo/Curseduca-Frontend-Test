import { createStore } from 'redux';

import homeReducer from './reducer';

const store = createStore(homeReducer);

export default store;