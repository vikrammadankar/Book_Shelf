const cartFromLS = JSON.parse(localStorage.getItem("cartItems"))
const initialState = {
    cartItems: cartFromLS || []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_TO_CART': {
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        }

        case "DELETE_FROM_CART": {
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        }

        default: return state;
    }
}