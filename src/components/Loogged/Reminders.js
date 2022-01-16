import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import AddReminder from "./Reminders/AddReminder";
import "../../styles/reminders.css";

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
    <div className="first">
      <div className="organised">
      {reminders.map((data) => (
        <div key={data._id} className="block">
          <p>data: {data.date}</p>
          <p>time: {data.time}</p>
          <p>powtarzanie: {data.periodicity}</p>
          <p>nazwa: {data.name}</p>
          <button className="button but"
            onClick={() => {
              clickHandler(data._id);
            }}
          >
            Usuń
          </button>
        </div>
      ))}
      </div>
      <AddReminder />
    </div>
  );
}
