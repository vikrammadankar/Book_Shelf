import React, { useState, useEffect } from 'react'
import { Layout, Product } from '../components/components-provider/components-provider'
import { getProducts } from './pages-provider/pages-functions'

const HomePage = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts(setProducts)
    }, [])

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    {products.map(product => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default HomePage