import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import ExpenseAdder from "./Expenses/ExpenseAdder";

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [summary, setSummary] = useState({});
  useEffect(() => {
    axios.get("http://localhost:5000/expense/").then((data) => {
      setExpenses(data.data);
      const sum = {
        sum: 0,
        Inne: 0,
        Rachunki: 0,
        Rozrywka: 0,
        Transport: 0,
        Jedzenie: 0,
      };
      data.data.forEach((el) => {
        if (el.date.substring(0, 7) === "2022-01") {
          sum[el.category] += el.value;
          sum["sum"] += el.value;
        }
      });
      setSummary(sum);
    });
  }, []);
  return (
    <div>
      {expenses.map((expense) => (
        <div key={expense._id}>
          <p>Wydane pieniądze: {expense.value}</p>
          <p>data: {expense.date}</p>
          <p>Kategoria: {expense.category}</p>
        </div>
      ))}
      <ExpenseAdder />
      <div>
        <p>Podsumowanie miesiąca</p>
        <p>Wydatki łącznie: {summary.sum}</p>
        <p>Jedzenie: {summary.Jedzenie}</p>
        <p>Transport: {summary.Transport}</p>
        <p>Rachunki: {summary.Rachunki}</p>
        <p>Rozrywka: {summary.Rozrywka}</p>
        <p>Inne: {summary.Inne}</p>
      </div>
    </div>
  );
}
