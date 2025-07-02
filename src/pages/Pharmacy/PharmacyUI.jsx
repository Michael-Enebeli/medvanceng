import React, { useEffect, useState, useRef } from 'react';
import { getProducts } from './utils/PharmacyStore';
import PharmacyShop from './components/PharmacyShop';
import CartPage from './components/CartPage';
import DeliveryPage from './components/DeliveryPage';
import PaymentPage from './components/PaymentPage';
import { showSuccess } from '@/utils/Toast';

export default function PharmacyUI() {
  const [view, setView] = useState("shop");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const stored = sessionStorage.getItem("cart");
    return stored ? JSON.parse(stored) : {};
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [slideDirection, setSlideDirection] = useState("forward");
  const [hasNavigated, setHasNavigated] = useState(false);
  const viewRef = useRef(null);




  useEffect(() => {
    getProducts().then(setProducts);
  }, []);



  const addToCart = (product) => {
    const inCart = cart[product.id] || 0;
    if (inCart < product.quantity) {
      setCart({ ...cart, [product.id]: inCart + 1 });
      showSuccess(`Added ${product.name} to cart`);
    }
  };


  const updateQuantity = (id, qty) => {
    if (qty <= 0) {
      const updatedCart = { ...cart };
      delete updatedCart[id];
      setCart(updatedCart);
    } else {
      setCart({ ...cart, [id]: qty });
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = { ...cart };
    delete updatedCart[id];
    setCart(updatedCart);
  };


  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const goToView = (nextView) => {
    const order = ["shop", "cart", "delivery", "payment"];
    const currentIndex = order.indexOf(view);
    const nextIndex = order.indexOf(nextView);
    if (nextIndex !== currentIndex) {
      setHasNavigated(true); // Only true if the view is actually changing
    }
    setSlideDirection(nextIndex > currentIndex ? "forward" : "back");
    setView(nextView);
  };

        useEffect(() => {
          if (!hasNavigated || !viewRef.current) return;

          const timeout = setTimeout(() => {
            const y = viewRef.current.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }, 400);

          return () => clearTimeout(timeout);
        }, [view, hasNavigated]);


      


    




  const renderBackArrow = () => {
    const steps = ["cart", "delivery", "payment"];
    if (!steps.includes(view)) return null;

    const previousView = {
      cart: "shop",
      delivery: "cart",
      payment: "delivery"
    }[view];

    return (
      <button className="back-arrow" onClick={() => goToView(previousView)}>
        <i className="fas fa-arrow-left"></i>
      </button>
    );
  };

  const slideClass = slideDirection === "back" ? "slide slide-back" : "slide";

  return (
    <div className="container">
      {renderBackArrow()}

      {view === "shop" && (
        <div className={slideClass} ref={viewRef}>
          <PharmacyShop
            products={products}
            cart={cart}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            addToCart={addToCart}
            setView={(v) => goToView(v)}
          
          />
        </div>
      )}
      {view === "cart" && (
      
      <div className={`cart-page ${slideClass}`} ref={viewRef}> 
        <CartPage
          cart={cart}
          products={products}
          setView={(v) => goToView(v)}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      </div>
  
      )}
      {view === "delivery" && (
        <div className={slideClass} ref={viewRef}>
          <DeliveryPage
            deliveryMethod={deliveryMethod}
            setDeliveryMethod={setDeliveryMethod}
            setView={(v) => goToView(v)}
          />
        </div>
      )}
      {view === "payment" && (
        <div className={slideClass} ref={viewRef}>
          <PaymentPage
            cart={cart}
            products={products}
            deliveryMethod={deliveryMethod}
          />
        </div>
      )}
    </div>
  );
}
