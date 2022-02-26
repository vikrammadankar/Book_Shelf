import $ from "jquery"

const editProduct = (item, setProductToEdit, showModal) => {
    setProductToEdit(item)
    showModal(true)
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
const openModalToAddProduct = (setAddModal) => {
    setAddModal(true)
}

export { editProduct, lazyLoader, openModalToAddProduct }