import { collection, query, where, getDocs, getDoc, doc, setDoc, addDoc, deleteDoc } from "firebase/firestore";

import { toast } from "react-toastify";
import { DB } from '../firebase';

const getProducts = async (setFunction, setLoading) => {
    try {
        setLoading(true)
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
const getOrders = async (setFunction, setLoading, userID) => {
    try {
        setLoading(true)
        const q = query(collection(DB, "orders"), where("order.id", "==", userID));

        let ordersWithAuthID = []

        const collectionWithAuthID = await getDocs(q);

        collectionWithAuthID.forEach((doc) => {
            ordersWithAuthID.push({
                id: doc.id,
                ...doc.data()
            })
        });

        setFunction(ordersWithAuthID)
        setLoading(false)

    } catch (error) {
        setLoading(false)
        console.log(error)
    }
}
const getAllOrders = async (setAllOrders, setLoading) => {
    try {
        setLoading(true)
        const allOrders = await getDocs(collection(DB, 'orders'))
        let allOrdersContainer = []
        allOrders.forEach(doc => {
            const singleOrder = {
                id: doc.id,
                ...doc.data()
            }
            allOrdersContainer.push(singleOrder)
        })
        setAllOrders(allOrdersContainer)
        setLoading(false)

    } catch (error) {
        setLoading(false)
        console.log(error)
    }
}
const deleteProductFromDB = async (adminProduct, setLoading, setAdminProducts) => {
    try {
        setLoading(true)
        await deleteDoc(doc(DB, "products", adminProduct.id))
        toast.success("Product Deleted Succesfully!")
        setLoading(false)
        getProducts(setAdminProducts, setLoading)
    } catch (error) {
        toast.error("Failed To Delete the Product!")
        setLoading(false)
    }
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
const addNewProductToDB = async (newProduct, closeAddModal, setLoading) => {
    try {
        setLoading(true)
        await addDoc(collection(DB, "products"), newProduct)
        toast.success("Product Added Succesfully!")
        window.location.reload()
        closeAddModal()
    } catch (error) {
        setLoading(false)
        console.log(error)
        toast.error("Failed To Add the Product!")
    }
}
const placeOrder = async (cartItems, info, setLoading, clearCart, closeModal, dispatch) => {

    const order = {
        id: JSON.parse(localStorage.getItem("currentUser")).user.uid,
        cartItems,
        info,
        date: new Date().toLocaleDateString('en-EN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }),
        email: JSON.parse(localStorage.getItem("currentUser")).user.email,
    }

    try {
        setLoading(true)
        await addDoc(collection(DB, "orders"), { order })
        toast.success("Order placed successfully!")
        closeModal()
        setLoading(false)
    } catch (error) {
        console.log(error)
        toast.error("Order not placed!")
        setLoading(false)
    }
    clearCart(dispatch)
}

export {
    getProduct,
    getProducts,
    getOrders,
    deleteProductFromDB,
    editProductFromDB,
    addNewProductToDB,
    placeOrder,
    getAllOrders
}
