// React and Router-dom
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// components
import { Layout, SingleProduct, Loader, BackButton } from '../components/components-provider/components-provider'

// functions
import { getProduct } from '../functions/firebase-functions'

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