import React from "react";
import { items } from "../lib/constants";

export default function ItemList() {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Item(props) {
  return (
    <li className="item">
      <label htmlFor="status">
        <input
          checked={props.item.packed}
          value={props.item.packed}
          type="checkbox"
          name={props.item.id}
          id={props.item.id}
        />
        {props.item.name}
      </label>
      <button>❌</button>
    </li>
  );
}
