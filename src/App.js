import React from "react";

import {
  HomePage,
  Login,
  Register,
  ProductInfo,
  Cart,
  Orders,
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
         

          {/* free routes */}
          {/* <Route exact="true" path={PATHS.HOME} element={<HomePage />} /> */}
          <Route exact="true" path={PATHS.LOGIN} element={<Login />} />
          <Route exact="true" path={PATHS.REGISTER} element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("currentUser")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
