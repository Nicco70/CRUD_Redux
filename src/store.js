import { configureStore, compose } from '@reduxjs/toolkit';

import rootReducer from './reducers'

const store = configureStore(
    { reducer: rootReducer },
    compose(
              typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? 
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;