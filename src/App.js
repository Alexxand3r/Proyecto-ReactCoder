import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import ItemDetailContainer from "./containers/ItemDetailContainer";
//import ItemListContainer from "./containers/itemListContainer";

function App() {
  return (
    <>
      <NavBar />
      {/* <ItemListContainer greeting={"Hola! Bienvenido a nuestra app!"}/> */}
      <ItemDetailContainer />
      <Home />
    </>
  );
}
export default App;
