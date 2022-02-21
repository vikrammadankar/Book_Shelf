import { collection, getDocs } from "firebase/firestore";
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

export default getProducts