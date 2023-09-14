import React from "react";

function Pizza(props) {
  console.log(props.pizzaObj.photoName);
  return (
    <div className=" flex items-center my-5 shadow-xl rounded-lg">
      <div>
        <img src={props.pizzaObj.photoName} alt="pizza" />
      </div>
      <div className="flex flex-col gap-3 mx-4">
        <h1>{props.pizzaObj.name}</h1>
        <span>{props.pizzaObj.ingredients}</span>
        <span>{props.pizzaObj.price}</span>
      </div>
    </div>
  );
}
export default Pizza;
