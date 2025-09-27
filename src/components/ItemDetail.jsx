// src/components/ItemDetail.jsx
import { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

function ItemDetail({ product }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart(); // use context directly

  const handleAdd = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h2>{product.name}</h2>
      <p style={styles.price}>${product.price}</p>

      {!added ? (
        <>
          <ItemCount
            initial={qty}
            max={product.stock ?? 99}
            onChange={setQty}
          />
          <div style={{ marginTop: 15 }}>
            <button style={styles.button} onClick={handleAdd}>
              Add to Cart
            </button>
          </div>
        </>
      ) : (
        <p style={{ color: "green", fontWeight: "bold" }}>
          {qty} items added!
        </p>
      )}
    </div>
  );
}

const styles = {
  card: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    marginBottom: "15px",
  },
  price: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ItemDetail;
