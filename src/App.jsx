import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Welcome to RetroStore - Your home for classic gaming" />
    </>
  );
}

export default App;
