import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>RetroStore</h2>
      <ul style={styles.menu}>
        <li>Home</li>
        <li>Consoles</li>
        <li>Handhelds</li>
        <li>Games</li>
        <li><CartWidget /></li>
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
  logo: {
    fontSize: "24px",
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
  }
};

export default NavBar;
