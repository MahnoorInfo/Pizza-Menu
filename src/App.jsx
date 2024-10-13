import { pizzaData } from "./components/PizzaData";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Menu from "./components/Menu";
import "./index.css";

function App() {
  console.log(pizzaData);
  return (
    <>
      <main className="container">
        <Header />
        <Menu />
        <Footer />
      </main>
    </>
  );
}

export default App;
