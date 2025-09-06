// ItemDetailContainer.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";
import { getProducts } from "../../data/products";

function ItemDetailContainer({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProducts().then((allProducts) => {
      const foundProduct = allProducts.find(
        (p) => p.id === parseInt(id, 10)
      );
      setProduct(foundProduct || null);
    });
  }, [id]);

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Loading product...</h2>;
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {/* Pass addToCart down to ItemDetail */}
      <ItemDetail product={product} addToCart={addToCart} />
    </div>
  );
}

export default ItemDetailContainer;
