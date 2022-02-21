import React, { useState } from 'react'
import { Layout } from '../components/components-provider/components-provider'

import { collection, addDoc, getDocs } from "firebase/firestore";
import DB from '../firebase';

// import { products } from '../firebase-products';

const HomePage = () => {

    const [products, setProducts] = useState([])

    async function getData() {
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
            setProducts(productsContainer)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <Layout>
            <h1>HOME</h1>
        </Layout>
    )
}

export default HomePage