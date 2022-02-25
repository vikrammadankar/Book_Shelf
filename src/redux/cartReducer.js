import { ACTIONS } from './actions'

// localStorage cart
const cartFromLS = JSON.parse(localStorage.getItem("cartItems"))

const initialState = {
    cartItems: cartFromLS || []
}

const { ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART } = ACTIONS

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART: {
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        }

        case DELETE_FROM_CART: {
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        }

        case CLEAR_CART: {
            return { ...state, cartItems: [] }
        }

        // case DELETE_FROM_DB: {
        //     return { ...state }
        // }

        // case EDIT_PRODUCT_FROM_DB: {
        //     return { ...state }
        // }
        default: return state;
    }
}