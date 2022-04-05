import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import DB from '../../firebase';

const getProducts = async (setFunction) => {
    try {
        const productsFromFB = await getDocs(collection(DB, 'products'))
        let productsContainer = []
        productsFromFB.forEach(doc => {
            const productWithID = {
                id: doc.id,
                ...doc.data()
            }
            productsContainer.push(productWithID)
        })
        setFunction(productsContainer)
    } catch (error) {
        console.log(error)
    }
}

const getProduct = async (setFunction, id) => {
    try {
        const productFromFB = await getDoc(doc(DB, 'products', id))
        console.log(productFromFB.data())
        setFunction(productFromFB.data())
    } catch (error) {
        console.log(error)
    }
}

const deleteFromCart = (cartItem, dispatch) => {
    dispatch({ type: "DELETE_FROM_CART", payload: cartItem })
}
export {
    getProduct,
    getProducts,
    deleteFromCart
}