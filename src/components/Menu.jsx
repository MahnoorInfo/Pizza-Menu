import Pizza from "./Pizza";
import { pizzaData } from "./PizzaData";

function Menu() {
  return (
    <main className="menu">
      <h2>Our Offerings</h2>
      {pizzaData.length > 0 ? (
        <>
          <p>
            {" "}
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.{" "}
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p> We &apos;r working on our menu.Please come back later. :)</p>
      )}
    </main>
  );
}

export default Menu;
