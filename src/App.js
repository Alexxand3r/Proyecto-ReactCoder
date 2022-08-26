import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/itemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Soy el ItemListContainer"} />
    </>
  );
}

export default App;
