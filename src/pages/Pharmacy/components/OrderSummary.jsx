import React from "react";

export default function OrderSummary() {
  const summary = JSON.parse(sessionStorage.getItem("cartSummary") || "{}");

  const formatPrice = (amount) =>
    `₦${(amount || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>

      <div className="order-items">
        {(summary.cartItems || []).map((item, index) => (
          <div key={index} className="order-item">
            <span>{item.name} × {item.qty}</span>
            <span>{formatPrice(item.qty * item.price)}</span>
          </div>
        ))}
      </div>

      <hr />

      <div className="order-total-line">
        <span>Subtotal</span>
        <span>{formatPrice(summary.subtotal)}</span>
      </div>

      <div className="order-total-line">
        <span>Delivery</span>
        <span>{formatPrice(summary.deliveryFee)}</span>
      </div>

      <div className="order-total-line total">
        <strong>Total</strong>
        <strong>{formatPrice(summary.total)}</strong>
      </div>
    </div>
  );
}
