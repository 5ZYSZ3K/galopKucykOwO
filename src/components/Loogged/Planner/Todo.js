import React from "react";

export default function Todo({ id, name, price, time, remove }) {
  return (
    <div>
      <p>{name}</p>
      <p>Koszt: {price}</p>
      <p>Czas trwania: {time}</p>
      <button
        onClick={() => {
          remove(id);
        }}
      >
        Usuń
      </button>
    </div>
  );
}
