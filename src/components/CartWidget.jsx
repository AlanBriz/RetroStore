function CartWidget() {
  const cartItemCount = 3; // Temporary static value

  return (
    <div style={styles.container}>
      <span role="img" aria-label="cart">🛒</span>
      <span style={styles.badge}>{cartItemCount}</span>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    display: "inline-block",
  },
  badge: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "12px",
  },
};

export default CartWidget;
