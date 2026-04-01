import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    {
      id: 1,
      name: "Nike Air Max",
      price: 5000,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 2,
      name: "Adidas Runner",
      price: 4500,
      image: "https://images.unsplash.com/photo-1593287073863-c992914cb3e3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Puma Sports",
      price: 4000,
      image: "https://images.unsplash.com/photo-1715001374698-dea6311634fe?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <Navbar
        totalItems={cartItems.length}
        onToggleCart={() => setShowCart(!showCart)}
      />

      <ProductList products={products} onAddToCart={addToCart} />

      {showCart && (
  <Cart
    cartItems={cartItems}
    onClose={() => setShowCart(false)}
  />
)}

      <Footer />
    </div>
  );
}

export default App;