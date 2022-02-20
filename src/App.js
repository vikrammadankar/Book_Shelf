// pages and paths
import { HomePage, Login, Register, ProductInfo, Cart } from './pages/pages-provider/pages-provider'

import PATHS from './pages/pages-provider/paths'

// routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact="true" path={PATHS.HOME} element={<HomePage />} />
          <Route exact="true" path={PATHS.LOGIN} element={<Login />} />
          <Route exact="true" path={PATHS.REGISTER} element={<Register />} />
          <Route exact="true" path={PATHS.PRODUCT_INFO} element={<ProductInfo />} />
          <Route exact="true" path={PATHS.CART} element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
