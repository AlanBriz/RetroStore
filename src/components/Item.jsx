// Item.jsx
import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`} style={styles.link}>View Details</Link>
    </div>
  );
}

const styles = {
  card: {
    width: "200px",
    padding: "10px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    textDecoration: "none",
    color: "#007bff",
  },
};

export default Item;
