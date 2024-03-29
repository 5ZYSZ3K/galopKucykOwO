import axios from "axios";
import { useState } from "react/cjs/react.development";

export default function AddReminder() {
  const [name, setName] = useState("");
  const [date, setDate] = useState(
    new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate()
  );
  const [time, setTime] = useState("00:00");
  const [periodicity, setPeriodicity] = useState(0);
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  const timeHandler = (e) => {
    setTime(e.target.value);
  };
  const periodicityHandler = (e) => {
    setPeriodicity(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/reminder/add", {
        name,
        date,
        time,
        periodicity,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={submitHandler}>
      <input onChange={nameHandler} placeholder="nazwa" />
      <input onChange={dateHandler} type="date" />
      <input onChange={timeHandler} type="time" min="00:00" max="23:59" />
      <input
        onChange={periodicityHandler}
        type="number"
        placeholder="ustaw, co ile dni ma się powtarzać"
      />
      <input type="submit" value="dodaj" />
    </form>
  );
}
