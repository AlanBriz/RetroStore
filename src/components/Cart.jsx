// src/components/Cart.jsx
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart, subtotal } = useCart();

  if (!cart || cart.length === 0) {
    return <p style={styles.empty}>Your cart is empty.</p>;
  }

  return (
    <div style={styles.container}>
      <h2>Shopping Cart</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td style={styles.name}>{item.name}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Math.max(1, Number(e.target.value)))}
                  style={styles.qtyInput}
                />
              </td>
              <td>${item.price}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button style={styles.removeBtn} onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={styles.summary}>
        <p><strong>Total:</strong> ${subtotal.toFixed(2)}</p>
        <div style={styles.buttons}>
          <button style={styles.clearBtn} onClick={clearCart}>Clear Cart</button>
          <Link to="/checkout" style={styles.checkoutBtn}>Proceed to Checkout</Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fff",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  name: {
    textAlign: "left",
    padding: "8px",
  },
  qtyInput: {
    width: "60px",
  },
  removeBtn: {
    padding: "5px 10px",
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  summary: {
    textAlign: "right",
  },
  buttons: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  },
  clearBtn: {
    padding: "10px 15px",
    backgroundColor: "#aaa",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  checkoutBtn: {
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "4px",
  },
  empty: {
    textAlign: "center",
    marginTop: "50px",
    fontSize: "18px",
  },
};

export default Cart;
