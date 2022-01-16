import React from "react";

export default function Todo({ id, name, price, time, remove }) {
  return (
    <div>
      <p className="items">{name}</p>
      <p className="items">Koszt: {price}</p>
      <p className="items">Czas trwania: {time}</p>
      <button class="button but"
        onClick={() => {
          remove(id);
        }}
      >
        Usuń
      </button>
      
    </div>
  );
}
