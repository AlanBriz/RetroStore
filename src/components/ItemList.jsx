// ItemList.jsx
import Item from "./Item";

function ItemList({ products }) {
  return (
    <div style={styles.list}>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

const styles = {
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
};

export default ItemList;
