function ItemListContainer({ greeting }) {
  return (
    <div style={styles.container}>
      <h1>{greeting}</h1>
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
