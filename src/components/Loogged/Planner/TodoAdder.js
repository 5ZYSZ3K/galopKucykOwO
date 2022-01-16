import axios from "axios";
import { useState } from "react";

export default function TodoAdder({ type }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [time, setTime] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const timeHandler = (e) => {
    setTime(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/todo/handle", { name, price, time, type })
      .catch(() => {
        setErrorMessage("Błąd!");
      });
  };
  return (
    <form onSubmit={submitHandler} className="formm">
      <input onChange={nameHandler} placeholder="nazwa" className="adder"/>
      <input type="number" onChange={priceHandler} placeholder="koszta" className="adder"/>
      <input
        type="number"
        onChange={timeHandler}
        placeholder="czas trwania w minutach"
        className="adder"
      />
      <input type="submit" value="Dodaj" className="adder button"/>
      <p>{errorMessage}</p>
    </form>
  );
}
