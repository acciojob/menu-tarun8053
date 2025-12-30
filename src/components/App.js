import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/App.css";

function App() {
  const menuItems = [
    { id: 1, name: "Pancakes", category: "breakfast", price: 100 },
    { id: 2, name: "Omelette", category: "breakfast", price: 80 },
    { id: 3, name: "Burger", category: "lunch", price: 150 },
    { id: 4, name: "Pizza", category: "lunch", price: 200 },
    { id: 5, name: "Chocolate Shake", category: "shakes", price: 120 },
    { id: 6, name: "Vanilla Shake", category: "shakes", price: 110 }
  ];

  const [items, setItems] = useState(menuItems);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menuItems
        : menuItems.filter((item) => item.category === category);

    setItems(filtered);
  };

  return (
    <div id="main">
      <h1>Menu</h1>

      <div className="buttons">
        <button id="filter-btn-1" onClick={() => filterItems("breakfast")}>
          Breakfast
        </button>

        <button id="filter-btn-2" onClick={() => filterItems("lunch")}>
          Lunch
        </button>

        <button id="filter-btn-3" onClick={() => filterItems("shakes")}>
          Shakes
        </button>
      </div>

      <Menu items={items} />
    </div>
  );
}

export default App;
