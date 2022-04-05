import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "./rootReducer";

const composeEnhancers = composeWithDevTools({
  });


/* const initialStore = {
    cartReducer : JSON.parse(localStorage.getItem('cartItems')) ?? []
} */

export const store = createStore(
    rootReducer,  composeEnhancers()
)