import React from 'react';
import useCounter from '../utils/UseCounter';

export default function CartPage({ cart, products, setView, updateQuantity, removeFromCart }) {
  const cartItems = Object.entries(cart).map(([id, qty]) => {
    const product = products.find(p => p.id === parseInt(id));
    return product ? { ...product, qty } : null;
  }).filter(Boolean);

  const rawSubtotal = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);

  const deliveryFeeRaw = Math.min(rawSubtotal * 0.05, 2000);
  const animatedSubtotal = useCounter(rawSubtotal, 400);
  const animatedDelivery = useCounter(deliveryFeeRaw, 400);
  const animatedTotal = useCounter(rawSubtotal + deliveryFeeRaw, 400);

  const formatPrice = (amount) =>
    `₦${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

  return (
    <>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center', marginTop: '2rem', fontStyle: 'italic' }}>No item in cart.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />

            <div className="cart-item-details">
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>×</button>

              <h4>{item.name}</h4>
              <p className="cart-item-price">{formatPrice(item.price)}</p>

              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.qty - 1)} disabled={item.qty <= 1}>−</button>
                <span>{item.qty}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.qty + 1)}
                  disabled={item.qty >= item.quantity}
                >
                  +
                </button>
              </div>

              <p className="item-total">
                Total: {formatPrice(item.qty * item.price)}
              </p>
            </div>
          </div>
        ))
      )}

      <div className="cart-summary">
        <h3>Subtotal: {formatPrice(animatedSubtotal)}</h3>
        <h4>Delivery Fee: {formatPrice(animatedDelivery)}</h4>
        <h2>Total: {formatPrice(animatedTotal)}</h2>
        <button
          className="next-btn"
          onClick={() => setView("delivery")}
          disabled={cartItems.length === 0}
        >
          Proceed to Delivery
        </button>
      </div>
    </>
  );
}
