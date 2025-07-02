export default function PharmacyShop({ products, cart, searchTerm, setSearchTerm, addToCart, setView }) {
  const filtered = products
    .map(p => ({ ...p, remaining: p.quantity - (cart[p.id] || 0) }))
    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  const formatPrice = (p) => `₦${p.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

  return (
    <>
      <div className="shop-header">
        <h2 className="shop-all">Shop All</h2>
        <div className="search-bar">
          <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search..." />
          <i className="fas fa-search search-icon"></i>
        </div>
        <div className="cart-icon" onClick={() => setView("cart")}>
          <i className="fas fa-shopping-cart"></i>
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </div>
      </div>

      <div className="product-grid">
        {filtered.length === 0 ? (
          <div className="no-products">Product unavailable.</div>
        ) : (
          filtered.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} className="product-image" />
              <h3>{product.name}</h3>
              <p className="product-price">{formatPrice(product.price)}</p>
              <button
                className="add-btn"
                disabled={product.remaining <= 0}
                onClick={() => addToCart(product)}
              >
                {product.remaining <= 0 ? "Out of Stock" : "Add to Cart"}
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}
