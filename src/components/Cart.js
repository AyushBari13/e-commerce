import React from "react";
import "./Cart.css";

function Cart({ cartItems, onClose }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="cart-header">
          <button onClick={onClose}>← Back</button>
          <h2>Shopping Cart</h2>
        </div>

        {/* Items */}
        {cartItems.length === 0 ? (
          <p className="empty">Cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))
        )}

        {/* Summary */}
        <div className="summary">
          <h3>Total: ₹{total}</h3>
          <button className="checkout">Checkout</button>
          <button className="clear">Clear All</button>
        </div>

      </div>
    </div>
  );
}

export default Cart;