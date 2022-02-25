import $ from "jquery"

const addToCart = (product, dispatch) => {
    dispatch({ type: "ADD_TO_CART", payload: product })
}

const clearCart = (dispatch) => {
    dispatch({ type: "CLEAR_CART" })
}

const lazyLoader = () => {
    $(document).ready(function () {
        [].forEach.call(document.querySelectorAll('.product-img[data-src]'), function (img) {
            img.setAttribute('src', img.getAttribute('data-src'));
            img.onload = function () {
                img.removeAttribute('data-src');
            };
        });
    });
}

export {
    addToCart,
    clearCart,
    lazyLoader
}