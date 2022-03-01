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
// const openModalToAddProduct = (setAddModal) => {
//     setAddModal(true)
// }
function currencyFormat(num) {
    const currency = "€"
    let number = Number(num)
    return `${number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} ${currency}`
}
function extractTotal(orders, setTotals) {
    let totalsContainer = []
    for (let i = 0; i < orders.length; i++) {
        totalsContainer.push(orders[i].order.cartItems.reduce((tot, item) => tot + Number(item.price), 0))
    }
    setTotals(totalsContainer)
}
function extractTotalFromSingleArray(cartItems, setTotal) {
    let tempTotal = 0
    cartItems.forEach(cartItem => {
        tempTotal += Number(cartItem.price)
    })
    setTotal(tempTotal)
}

export { editProduct, lazyLoader, currencyFormat, extractTotal, extractTotalFromSingleArray }