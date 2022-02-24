import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import DB from '../../firebase';

const getProducts = async (setFunction, setLoading) => {
    setLoading(true)
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
        setLoading(false)

    } catch (error) {
        setLoading(false)
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

const getOrders = async (setFunction, setLoading) => {
    setLoading(true)
    try {
        const ordersFromFB = await getDocs(collection(DB, 'orders'))
        let ordersContainer = []
        ordersFromFB.forEach(doc => {
            const orderWithID = {
                id: doc.id,
                ...doc.data()
            }
            ordersContainer.push(orderWithID)
        })
        console.log("ORDERS FROM GETORDERS", ordersContainer)
        setFunction(ordersContainer)
        setLoading(false)

    } catch (error) {
        setLoading(false)
        console.log(error)
    }
}

export {
    getProduct,
    getProducts,
    deleteFromCart,
    getOrders
}
