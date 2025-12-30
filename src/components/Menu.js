import React from "react";

function Menu({ items }) {
  return (
    <div className="menu">
      {items.map((item) => (
        <div
          key={item.id}
          data-test-id={`menu-item-${item.category}`}
          className="menu-item"
        >
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Menu;
