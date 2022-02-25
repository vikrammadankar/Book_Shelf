import { collection, getDocs, getDoc, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import DB from '../firebase';

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

        setFunction(ordersContainer)
        setLoading(false)

    } catch (error) {
        setLoading(false)
        console.log(error)
    }
}

const deleteProductFromDB = () => {

}

const editProductFromDB = async (adminProduct, setLoading, closeModal, setAdminProducts) => {
    try {
        setLoading(true)
        await setDoc(doc(DB, "products", adminProduct.id), adminProduct)
        toast.success("Product Edited Succesfully!")
        getProducts(setAdminProducts, setLoading)
        closeModal()
    } catch (error) {
        setLoading(false)
        console.log(error)
        toast.error("Product Edited Failed!")
    }
}


export {
    getProduct,
    getProducts,
    getOrders,
    deleteProductFromDB,
    editProductFromDB
}
