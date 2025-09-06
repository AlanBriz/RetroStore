// ItemListContainer.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"; // presentation component
import { getProducts } from "../../data/products"; // fake API function

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams(); // reads category from URL

  // Dynamic greeting based on category
  const greetingsMap = {
    consoles: "Consoles",
    handhelds: "Handhelds",
    games: "Games",
  };
  const greeting = categoryId ? `Viewing ${greetingsMap[categoryId] || "Products"}` : "Welcome to RetroStore - Your home for classic gaming";

  useEffect(() => {
    // Fetch products asynchronously
    getProducts(categoryId)
      .then((res) => setProducts(res))
      .catch((err) => console.error(err));
  }, [categoryId]); // re-run when category changes

  return (
    <div style={styles.container}>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
    color: "#333",
  },
};

export default ItemListContainer;
