import React from "react";
import Pizza from "./Pizza";
import { pizzaData } from "./data";

function Menu() {
  console.log(pizzaData);
  return (
    <div>
      <h2 className="underline font-semibold text-lg text-center">OUR MENU</h2>
      <div className="grid grid-cols-4 gap-4">
        {pizzaData.map((pizza, index) => (
          <Pizza pizzaObj={pizza} key={index} />
        ))}
      </div>
    </div>
  );
}
export default Menu;
