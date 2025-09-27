// src/components/ItemDetailContainer.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../firebase/config";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer({ addToCartFromProps }) { // we will instead use CartContext, but keep signature flexible
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const p = await fetchProductById(id);
      setProduct(p);
      setLoading(false);
    })();
  }, [id]);

  if (loading) return <p style={{textAlign:"center"}}>Loading product...</p>;
  if (!product) return <p style={{textAlign:"center"}}>Product not found.</p>;

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
