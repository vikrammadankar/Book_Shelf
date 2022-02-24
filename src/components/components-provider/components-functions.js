
const addToCart = (product, dispatch) => {
    dispatch({ type: "ADD_TO_CART", payload: product })
}

const clearCart = (dispatch) => {
    dispatch({ type: "CLEAR_CART" })
}

export {
    addToCart,
    clearCart
}