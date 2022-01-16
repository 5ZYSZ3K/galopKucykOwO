import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import AddReminder from "./Reminders/AddReminder";

export default function Reminders() {
  const [reminders, setReminders] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/reminder/").then((data) => {
      setReminders(data.data);
    });
  }, []);
  const clickHandler = (id) => {
    axios
      .delete("http://localhost:5000/reminder/add", { data: { id } })
      .then((data) => console.log(data));
  };
  return (
    <div>
      {reminders.map((data) => (
        <div key={data._id}>
          <p>data: {data.date}</p>
          <p>time: {data.time}</p>
          <p>powtarzanie: {data.periodicity}</p>
          <p>nazwa: {data.name}</p>
          <button
            onClick={() => {
              clickHandler(data._id);
            }}
          >
            Usuń
          </button>
        </div>
      ))}
      <AddReminder />
    </div>
  );
}
