// React stuff
import React, { useState, useEffect } from 'react'

// components
import { Layout, Product, Loader, Select } from '../components/components-provider/components-provider'

// functions
import { getProducts } from './pages-provider/pages-functions'

const HomePage = () => {

    const [products, setProducts] = useState([])
    // const [searchKey, setSearchKey] = useState("")
    const [category, setCategory] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getProducts(setProducts, setLoading)
    }, [])

    return (
        <Layout>
            <div className="container">
                <Select
                    category={category}
                    setCategory={setCategory}
                />
                <div className={`row ${products.length === 0 && "vh-100"}`}>
                    {loading && <Loader />}
                    {products.length > 0 && products
                        // .filter(toFilterItem => toFilterItem.name.toLowerCase().includes(searchKey))
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