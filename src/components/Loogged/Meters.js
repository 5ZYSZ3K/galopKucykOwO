import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import MeterAdder from "./Meters/MeterAdder";

export default function Meters() {
  const [meters, setMeters] = useState([]);
  const [average, setAverage] = useState({});
  const [last, setLast] = useState({});
  useEffect(() => {
    axios.get("http://localhost:5000/meter/").then((data) => {
      setMeters(data.data);
      let lastDateP = 0;
      let lastDateW = 0;
      let lastDateG = 0;
      let l = {};
      let prad = 0;
      let gaz = 0;
      let woda = 0;
      let counter = 0;
      data.data.forEach((el) => {
        if (
          parseInt(el.date.split("-")[0]) * 12 +
            parseInt(el.date.split("-")[1]) >
            lastDateP &&
          el.category === "Prąd"
        ) {
          lastDateP =
            parseInt(el.date.split("-")[0]) * 12 +
            parseInt(el.date.split("-")[1]);
          l.prad = el.value;
        }
        if (
          parseInt(el.date.split("-")[0]) * 12 +
            parseInt(el.date.split("-")[1]) >
            lastDateW &&
          el.category === "Woda"
        ) {
          lastDateW =
            parseInt(el.date.split("-")[0]) * 12 +
            parseInt(el.date.split("-")[1]);
          l.woda = el.value;
        }
        if (
          parseInt(el.date.split("-")[0]) * 12 +
            parseInt(el.date.split("-")[1]) >
            lastDateG &&
          el.category === "Gaz"
        ) {
          lastDateG =
            parseInt(el.date.split("-")[0]) * 12 +
            parseInt(el.date.split("-")[1]);
          l.gaz = el.value;
        }
        if (el.category === "Prąd") prad += el.value;
        else if (el.category === "Woda") woda += el.value;
        else if (el.category === "Gaz") gaz += el.value;
        counter++;
      });
      setLast(l);
      setAverage({
        prad: prad / counter,
        woda: woda / counter,
        gaz: gaz / counter,
      });
    });
  }, []);
  return (
    <div>
      {meters.map((data) => (
        <div key={data._id}>
          <p>data: {data.date}</p>
          <p>kategoria: {data.category}</p>
          <p>wartość: {data.value}</p>
        </div>
      ))}
      <MeterAdder />
      <div>
        <p>Średnie zużycie wody: {average.woda}</p>
        <p>Średnie zużycie prądu: {average.prad}</p>
        <p>Średnie zużycie gazu: {average.gaz}</p>
      </div>
      <p>W ostatnim miesiącu:</p>
      <div>
        <p>zużycie wody: {last.woda}</p>
        <p>zużycie prądu: {last.prad}</p>
        <p>zużycie gazu: {last.gaz}</p>
      </div>
    </div>
  );
}
