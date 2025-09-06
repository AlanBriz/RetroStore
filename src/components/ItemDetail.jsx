import { useState } from "react";
import ItemCount from "./ItemCount.jsx";

function ItemDetail({ product, addToCart }) {
  const [count, setCount] = useState(1);
  const [addedMessage, setAddedMessage] = useState(false);

  const handleAdd = () => {
    addToCart(product, count);
    setAddedMessage(true);

    setTimeout(() => {
      setAddedMessage(false);
    }, 2000);
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h2>{product.name}</h2>
      <p style={styles.price}>${product.price}</p>

      {/* ItemCount component */}
      <ItemCount initial={count} onChange={setCount} />

      <div style={{ marginTop: "15px" }}>
        <button style={styles.button} onClick={handleAdd}>
          Add to Cart
        </button>
      </div>

      <p
        style={{
          ...styles.addedMessage,
          opacity: addedMessage ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {count} {product.name}(s) added to cart!
      </p>
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
  addedMessage: {
    color: "green",
    marginTop: "10px",
    fontWeight: "bold",
  },
};

export default ItemDetail;
