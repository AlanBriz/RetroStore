// ItemCount.jsx
import { useState, useEffect } from "react";

function ItemCount({ initial = 1, onChange }) {
  const [count, setCount] = useState(initial);

  // Notify parent when count changes
  useEffect(() => {
    onChange(count);
  }, [count, onChange]);

  return (
    <div style={{ marginTop: "10px" }}>
      <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default ItemCount;
