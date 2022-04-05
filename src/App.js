import React from "react";

import {
  HomePage,
  Login,
  Register,
  ProductInfo,
  Cart,
} from "./pages/pages-provider/pages-provider";
import { ToastContainer } from "react-toastify";

import PATHS from "./pages/pages-provider/paths";

// styles
import "./index.css";
import "./styles/auth.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/layout.css";
import "./styles/products.css";

// routes
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import OrdersPage from "./pages/OrdersPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          {/* protected */}
          <Route
            exact="true"
            path={PATHS.HOME}
            element={
              <ProtectedRoutes>
                <HomePage />
              </ProtectedRoutes>
            }
          />
          <Route
            exact="true"
            path={PATHS.PRODUCT_INFO}
            element={
              <ProtectedRoutes>
                <ProductInfo />
              </ProtectedRoutes>
            }
          />
          <Route
            exact="true"
            path={PATHS.CART}
            element={
              <ProtectedRoutes>
                <Cart />
              </ProtectedRoutes>
            }
          />
          <Route
            exact="true"
            path="/orders"
            element={
              <ProtectedRoutes>
                <OrdersPage />
              </ProtectedRoutes>
            }
          />
          <Route
            exact="true"
            path="/admin"
            element={
              <ProtectedRoutes>
                <AdminPage />
              </ProtectedRoutes>
            }
          />

          {/* free routes */}
          <Route exact="true" path={PATHS.LOGIN} element={<Login />} />
          <Route exact="true" path={PATHS.REGISTER} element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/* Higher Order */
export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("currentUser")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
