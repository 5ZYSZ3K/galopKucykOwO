import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import MeterAdder from "./Meters/MeterAdder";
import "../../styles/meters.css";

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
      let counterP = 0;
      let counterW = 0;
      let counterG = 0;
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
        if (el.category === "Prąd"){
          counterP++;
          prad += el.value}
        else if (el.category === "Woda"){ 
          counterW++;
          woda += el.value;}
        else if (el.category === "Gaz"){ 
          counterG++;
          gaz += el.value;}
      });
      setLast(l);
      setAverage({
        prad: prad / counterP,
        woda: woda / counterW,
        gaz: gaz / counterG,
      });
    });
  }, []);
  return (
    <div className="first">
      <div className="organise">
      {meters.map((data) => (
        <div key={data._id} className="blocks">
          <p>data: {data.date}</p>
          <p>kategoria: {data.category}</p>
          <p>wartość: {data.value}</p>
        </div>
        
      ))}
      </div>
      <MeterAdder />
      <div className="upper">
      <div className="av">
        <p>Średnie zużycie wody: {average.woda}</p>
        <p>Średnie zużycie prądu: {average.prad}</p>
        <p>Średnie zużycie gazu: {average.gaz}</p>
      </div>
      <div className="av">
        <p>Zużycie wody na ostatnim odczycie: {last.woda}</p>
        <p>Zużycie prądu na ostatnim odczycie: {last.prad}</p>
        <p>Zużycie gazu na ostatnim odczycie: {last.gaz}</p>
      </div>
      </div>
    </div>
  );
}
