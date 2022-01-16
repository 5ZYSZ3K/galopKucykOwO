import axios from "axios";
import { useState } from "react/cjs/react.development";

export default function ExpenseAdder() {
  const [value, setValue] = useState(0);
  const [date, setDate] = useState(
    new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate()
  );
  const [category, setCategory] = useState("Inne");
  const valueHandler = (e) => {
    setValue(e.target.value);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const body = { value, date, category };
    if (date === "")
      body.date =
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate();
    console.log(body);
    axios.post("http://localhost:5000/expense/add", body).then((data) => {
      console.log(data);
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="number"
        onChange={valueHandler}
        placeholder="ilość pieniędzy"
      />
      <input type="date" onChange={dateHandler} />
      <select onChange={categoryHandler}>
        <option>Inne</option>
        <option>Rachunki</option>
        <option>Jedzenie</option>
        <option>Rozrywka</option>
        <option>Transport</option>
      </select>
      <input type="submit" value="wyślij" />
    </form>
  );
}
