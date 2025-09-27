// App.jsx
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
<Route path="/populate" element={<populateRetro />} />


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const existing = prevCart.find(p => p.id === product.id);
      if (existing) {
        return prevCart.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  return (
    <>
      <NavBar cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer greeting="Welcome to RetroStore - Your home for classic gaming" />
          }
        />
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer greeting="Category products" />}
        />
        <Route
          path="/item/:id"
          element={<ItemDetailContainer addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="*" element={<h2 style={{ textAlign: "center" }}>404 - Page Not Found</h2>} />
        <Route path="/checkout" element={<CheckoutForm />} />
      </Routes>
    </>
  );
}

export default App;
