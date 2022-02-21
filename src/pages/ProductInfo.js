import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Layout, SingleProduct, Loader, BackButton } from '../components/components-provider/components-provider'
import { getProduct } from './pages-provider/pages-functions'

const ProductInfo = () => {
    const [product, setProduct] = useState(null)
    const params = useParams()

    useEffect(() => {
        getProduct(setProduct, params.id)
    }, [])

    return (
        <Layout>
            {product ? (
                <div className="container text-center myContainer">
                    <BackButton />
                    <SingleProduct product={product} />
                </div>
            ) : <Loader />}
        </Layout>
    )
}

export default ProductInfo