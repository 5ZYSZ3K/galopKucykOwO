import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "../../styles/tips.css";

export default function Tips() {
  const [tip, setTip] = useState("");
  useEffect(() => {
    axios.get("http://localhost:5000/tips/").then((data) => {
      setTip(data.data.tip);
    });
  }, []);
  return (<div className="tak">
    <div className="top">Porada:</div>
    <div className="down">{tip}</div>
    </div>)
}
