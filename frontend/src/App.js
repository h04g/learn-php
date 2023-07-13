import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Header from './Component/Header'
import Home from './Component/Home'
import Footer from './Component/Footer'
import Products from './Component/Products'
import AddProduct from './Component/AddProduct'

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/addproduct" element={<AddProduct />} />
          </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
