export default function PaymentPage({ cart, products, deliveryMethod }) {
  const getCartItems = () => {
    return Object.entries(cart).map(([id, qty]) => {
      const item = products.find(p => p.id === parseInt(id));
      return { ...item, qty };
    });
  };

  const totalPrice = () => {
    return getCartItems().reduce((sum, item) => sum + item.qty * item.price, 0);
  };

  const formatPrice = (p) => `₦${p.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

  return (
    <div>
      <h2>Payment Summary</h2>
      {getCartItems().map(item => (
        <div key={item.id}>
          <p>{item.name} × {item.qty}</p>
        </div>
      ))}
      <p><strong>Delivery:</strong> {deliveryMethod === "pickup" ? "Pickup" : "Home Delivery"}</p>
      <h3>Total Payable: {formatPrice(totalPrice())}</h3>
      <button onClick={() => alert("Order placed!")}>Place Order</button>
    </div>
  );
}
