const addToCart = (product, dispatch) => {
    dispatch({ type: "ADD_TO_CART", payload: product })
}
const clearCart = (dispatch) => {
    dispatch({ type: "CLEAR_CART" })
}
const deleteFromCart = (cartItem, dispatch) => {
    dispatch({ type: "DELETE_FROM_CART", payload: cartItem })
}


// const deleteProductFromDB = (adminProduct, dispatch) => {
//     dispatch({ type: "DELETE_FROM_DB", payload: adminProduct })
// }
// const editProductFromDB = (adminProduct, dispatch) => {
//     dispatch({ type: "EDIT_PRODUCT_FROM_DB", payload: adminProduct })
// }

export {
    addToCart,
    clearCart,
    deleteFromCart
}