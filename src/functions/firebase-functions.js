import { collection, getDocs, getDoc, doc, setDoc, addDoc, deleteDoc } from "firebase/firestore";
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

const editProductFromDB = async (adminProduct, setLoading, closeModal) => {
    try {
        setLoading(true)
        await setDoc(doc(DB, "products", adminProduct.id), adminProduct)
        toast.success("Product Edited Succesfully!")
        // getProducts(setAdminProducts, setLoading)
        window.location.reload()
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


export {
    getProduct,
    getProducts,
    getOrders,
    deleteProductFromDB,
    editProductFromDB,
    addNewProductToDB
}
