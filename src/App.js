// Dependencies
import React from "react";
import Menu from "./Menu";

const App = () => {
  //   const hours = new Date().getHours();
  //   const openHour = 12;
  //   const closeHour = 22;
  //   const isOpen = hours < closeHour && hours > openHour;
  //  isOpen ? null : alert("Sorry we're currently not open !");

  return (
    <div className=" bg-gray-500">
      <h1 className="text-5xl text-center text-yellow-400">
        - FAST REACT PIZZA CO -
      </h1>
      <div className=" mt-6">
        <Menu />
      </div>
      <div className="flex flex-col items-center justify-between gap-3">
        <span className="text-medium">
          {new Date().toLocaleTimeString()}, we're currenly open now.
        </span>
        <button className="bg-yellow-500 rounded-full px-3 py-2 font-bold  text-gray-600">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default App;
