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
            <div className="container">
                {loading ? <Loader /> : <AdminTable adminProducts={adminProducts} setAdminProducts={setAdminProducts} setLoading={setLoading} />}
            </div>
        </Layout>
    )
}

export default Admin