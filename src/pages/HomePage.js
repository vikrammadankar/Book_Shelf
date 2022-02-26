// React stuff
import React, { useState, useEffect } from 'react'

// components
import { Layout, Product, Loader, SelectCategories } from '../components/components-provider/components-provider'

// functions
import { getProducts } from '../functions/firebase-functions'

const HomePage = () => {

    const [products, setProducts] = useState([])
    const [category, setCategory] = useState("")
    const [loading, setLoading] = useState(false)

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getProducts(setProducts, setLoading)
    }, [])

    useEffect(() => {
        setCategories([...new Set(products.map(product => product.category))])
    }, [products])

    return (
        <Layout>
            <div className="container">
                <div className={`d-flex justify-content-between align-items-center mb-5 ${products.length === 0 && "none"}`}>
                    <h1>Shop</h1>
                    <SelectCategories
                        category={category}
                        setCategory={setCategory}
                        categories={categories}
                    />
                </div>
                <div className={`row ${products.length === 0 && "vh-100"}`}>
                    {loading && <Loader />}
                    {products.length > 0 && products
                        .filter(toFilterCategory => toFilterCategory.category.toLowerCase().includes(category))
                        .map(product => (
                            <Product product={product} key={product.id} />
                        ))}
                </div>
            </div>
        </Layout>
    )
}

export default HomePage