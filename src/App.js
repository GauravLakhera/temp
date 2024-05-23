import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Menus from "./Components/Menus";

function App() {
  return (
    <>
      <Header />
      <Menus/>
      <Body />
      <Footer/>
    </>
  );
}

export default App;
