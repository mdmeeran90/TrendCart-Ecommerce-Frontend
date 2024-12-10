import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';

function Apps() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme='dark' position="top-center" />
          <Header cartItems={cartItems} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default Apps;
