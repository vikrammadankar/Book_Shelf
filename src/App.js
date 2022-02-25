// toastify container
import { ToastContainer } from 'react-toastify'
import AllRoutes from './router/AllRoutes';

// import './index.css';
// import './styles/layout.css'
// import './styles/auth.css'
// import './styles/products.css'
// import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <AllRoutes />
    </div>
  );
}

export default App;