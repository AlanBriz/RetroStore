// src/components/ItemListContainer.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ItemList from "./ItemList";
import { fetchAllProducts, fetchProductsByCategory } from "../firebase/config";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const data = categoryId
          ? await fetchProductsByCategory(categoryId)
          : await fetchAllProducts();
        setProducts(data);
      } finally {
        setLoading(false);
      }
    })();
  }, [categoryId]);

  if (loading) return <p style={{textAlign:"center"}}>Loading products...</p>;
  if (!products || products.length === 0) return <p style={{textAlign:"center"}}>No products found.</p>;

  return (
    <div style={styles.container}>
      <h1 style={{textAlign:"center"}}>{categoryId ? categoryId : "All Products"}</h1>
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
