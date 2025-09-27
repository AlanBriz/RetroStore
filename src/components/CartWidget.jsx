// src/components/CartWidget.jsx
function CartWidget({ totalItems = 0 }) {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <span role="img" aria-label="cart">🛒</span>
      <span style={{
        position: "absolute", top: "-8px", right: "-8px",
        backgroundColor: "red", color: "white", borderRadius: "50%",
        padding: "2px 6px", fontSize: "12px"
      }}>{totalItems}</span>
    </div>
  );
}

export default CartWidget;