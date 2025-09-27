// src/components/NavBar.jsx
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useCart } from "../context/CartContext";

function NavBar() {
  const { totalItems } = useCart(); // get totalItems from context

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>
        <Link to="/" style={styles.link}>RetroStore</Link>
      </h2>
      <ul style={styles.menu}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/category/consoles" style={styles.link}>Consoles</Link></li>
        <li><Link to="/category/handhelds" style={styles.link}>Handhelds</Link></li>
        <li><Link to="/category/games" style={styles.link}>Games</Link></li>
        <li>
          <Link to="/cart" style={styles.link}>
            <CartWidget totalItems={totalItems} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#222",
    color: "#fff",
    padding: "10px 20px",
  },
  logo: { fontSize: "24px" },
  menu: { listStyle: "none", display: "flex", gap: "15px" },
  link: { textDecoration: "none", color: "#fff" },
};

export default NavBar;
