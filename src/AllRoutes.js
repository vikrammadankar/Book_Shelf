// pages
import { HomePage, Login, Register, ProductInfo, Cart, Orders, Admin } from './pages/pages-provider/pages-provider'

// route paths & route stuff
import PATHS from './pages/pages-provider/paths'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// component to protect routes
import ProtectedRoutes from './ProtectedRoutes'

import './index.css';
import './styles/layout.css'
import './styles/auth.css'
import './styles/products.css'
import 'react-toastify/dist/ReactToastify.css'

const AllRoutes = () => {
    return (
        <Router>
            <Routes>

                {/* protected */}
                <Route exact="true" path={PATHS.HOME} element={<ProtectedRoutes>
                    <HomePage />
                </ProtectedRoutes>} />
                <Route exact="true" path={PATHS.PRODUCT_INFO} element={<ProtectedRoutes>
                    <ProductInfo />
                </ProtectedRoutes>} />
                <Route exact="true" path={PATHS.CART} element={<ProtectedRoutes>
                    <Cart />
                </ProtectedRoutes>} />
                <Route exact="true" path={PATHS.ORDERS} element={<ProtectedRoutes>
                    <Orders />
                </ProtectedRoutes>} />
                <Route exact="true" path={PATHS.ADMIN} element={<ProtectedRoutes>
                    <Admin />
                </ProtectedRoutes>} />

                {/* free routes */}
                <Route exact="true" path={PATHS.LOGIN} element={<Login />} />
                <Route exact="true" path={PATHS.REGISTER} element={<Register />} />
            </Routes>
        </Router>
    )
}

export default AllRoutes