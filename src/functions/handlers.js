import $ from "jquery"

const editProduct = (item, functions) => {
    functions.setProductToEdit(item)
    functions.showModal(true)
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

export { editProduct, lazyLoader }