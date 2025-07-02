export default function DeliveryPage({ deliveryMethod, setDeliveryMethod, setView }) {
  return (
    <div>
      <h2>Select Delivery Method</h2>
      <select onChange={e => setDeliveryMethod(e.target.value)} value={deliveryMethod}>
        <option value="">Choose method</option>
        <option value="pickup">Pickup</option>
        <option value="door">Home Delivery</option>
      </select>
      <br />
      <button disabled={!deliveryMethod} onClick={() => setView("payment")}>Next to Payment</button>
    </div>
  );
}
