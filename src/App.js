import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import 'swiper/swiper-bundle.css';
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./pages/Profile";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/cart" element={<Cart/>} /> */}
        <Route path="/cart" element={<PrivateRoute >
          <Cart />
        </PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute >
          <Profile />
        </PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Layout>
  );
}

export default App;
