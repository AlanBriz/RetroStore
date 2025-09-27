// src/components/CheckoutForm.jsx
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { createOrder } from "../firebase/config";

function CheckoutForm() {
  const { cart, clearCart, subtotal } = useCart();
  const [buyer, setBuyer] = useState({ name: "", email: "", address: "" });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.email || !buyer.address) {
      setError("Please fill in all fields.");
      return;
    }

    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    setLoading(true);
    setError("");

    const order = {
      buyer,
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total: subtotal,
      date: new Date().toISOString(),
    };

    try {
      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
    } catch (err) {
      console.error(err);
      setError("Error creating order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div style={styles.container}>
        <h2>Thank you for your purchase!</h2>
        <p>Your order ID is: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Checkout</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={buyer.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={buyer.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={buyer.address}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Place Order"}
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "15px",
  },
  error: {
    color: "red",
    fontWeight: "bold",
  },
};

export default CheckoutForm;
