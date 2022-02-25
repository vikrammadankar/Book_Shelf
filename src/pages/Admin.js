import { useEffect, useState } from 'react'
import { Layout, Loader, AdminTable } from '../components/components-provider/components-provider'

import { getProducts } from '../functions/firebase-functions'
import { lazyLoader } from '../functions/handlers'



const Admin = () => {
    const [adminProducts, setAdminProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getProducts(setAdminProducts, setLoading)
    }, [])

    lazyLoader()

    return (
        <Layout>
            {loading && <Loader />}

            <div className="container">
                <AdminTable adminProducts={adminProducts} />
            </div>
        </Layout>
    )
}

export default Admin