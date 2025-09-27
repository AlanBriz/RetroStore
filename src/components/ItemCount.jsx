// src/components/ItemCount.jsx
import { useState, useEffect } from "react";

export default function ItemCount({ initial = 1, max = 99, onChange }) {
  const [count, setCount] = useState(initial);

  useEffect(() => { onChange && onChange(count); }, [count, onChange]);

  return (
    <div style={{ marginTop: 10 }}>
      <button onClick={() => setCount(c => Math.max(1, c - 1))}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={() => setCount(c => Math.min(max, c + 1))}>+</button>
    </div>
  );
}