import React, { useState, useEffect } from 'react'
import { Layout, Product, Loader } from '../components/components-provider/components-provider'
import { getProducts } from './pages-provider/pages-functions'

const HomePage = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts(setProducts)
    }, [])

    return (
        <Layout>
            {products.length ? (<div className="container">
                <div className="row">
                    {products.map(product => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>
            </div>) : <Loader/>}
        </Layout>
    )
}

export default HomePage