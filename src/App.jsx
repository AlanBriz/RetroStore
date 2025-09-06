// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

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
    <Router>
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
        <Route path="*" element={<h2 style={{ textAlign: "center" }}>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
