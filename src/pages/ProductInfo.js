import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/components-provider/components-provider'
import { getProduct } from './pages-provider/pages-functions'

const ProductInfo = () => {
    const [product, setProduct] = useState(null)
    const params = useParams()

    useEffect(() => {
        getProduct(setProduct, params.id)
        console.log(params)
    }, [])

    return (
        <Layout>
            <h1>PRODUCT_INFO</h1>
            {product ? (<h1>{product.name}</h1>) : 'Loading...'}
        </Layout>
    )
}

export default ProductInfo