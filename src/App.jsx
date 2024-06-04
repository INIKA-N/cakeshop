import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Packaging from './components/Packaging';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/package" element={<Packaging />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;