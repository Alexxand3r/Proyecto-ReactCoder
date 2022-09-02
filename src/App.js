import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import ItemListContainer from "./containers/itemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <ItemListContainer greeting={"Soy el ItemListContainer"} />
    </>
  );
}

export default App;
