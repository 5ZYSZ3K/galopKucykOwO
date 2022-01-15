import { useState, useEffect } from "react";
import TodoAdder from "./Planner/TodoAdder";
import Todo from "./Planner/Todo";
import axios from "axios";

export default function Planner() {
  const [todos, setTodos] = useState([]);
  const [nottodos, setNotTodos] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/todo/gettodo")
      .then((data) => {
        console.log(data.data);
        setTodos(data.data);
      })
      .catch(() => {
        setMessage("Błąd bazy!");
      });
    axios
      .get("http://localhost:5000/todo/getnottodo")
      .then((data) => {
        setNotTodos(data.data);
      })
      .catch(() => {
        setMessage("Błąd bazy!");
      });
  }, []);
  const remove = (id) => {
    axios
      .delete("http://localhost:5000/todo/handle", { data: { id } })
      .catch(() => {
        setMessage("Błąd bazy!");
      });
  };
  return (
    <div className="planner">
      <div className="todo">
        <div className="todos">
          {todos.map((todo) => (
            <Todo
              id={todo._id}
              key={todo._id}
              name={todo.name}
              price={todo.price}
              time={todo.time}
              remove={remove}
            />
          ))}
        </div>
        <TodoAdder type="todo" />
      </div>
      <div className="nottodo">
        <div>
          {nottodos.map((todo) => (
            <Todo
              id={todo._id}
              key={todo._id}
              name={todo.name}
              price={todo.price}
              time={todo.time}
              remove={remove}
            />
          ))}
        </div>
        <TodoAdder type="nottodo" />
      </div>
      <p>{message}</p>
    </div>
  );
}
