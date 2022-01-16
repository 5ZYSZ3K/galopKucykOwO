import axios from "axios";
import { useState } from "react/cjs/react.development";

export default function MeterAdder() {
  const [value, setValue] = useState(0);
  const [date, setDate] = useState(0);
  const [category, setCategory] = useState("Prąd");
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
    const body = {
      value,
      date: date.substring(0, 7),
      category,
    };
    if (body.year === 0) body.year = new Date().getFullYear();
    if (body.month === 0) body.month = new Date().getMonth() + 1;
    axios.post("http://localhost:5000/meter/add", body).then((data) => {
      console.log(data);
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="number" onChange={valueHandler} placeholder="wartość" />
      <input type="date" onChange={dateHandler} />
      <select onChange={categoryHandler}>
        <option>Prąd</option>
        <option>Woda</option>
        <option>Gaz</option>
      </select>
      <input type="submit" value="wyślij" />
    </form>
  );
}
