import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "../../styles/tips.css";

export default function Tips() {
  const [tip, setTip] = useState("");
  const [tip2, setTip2] = useState("");
  useEffect(() => {
    axios.get("http://localhost:5000/tips/").then((data) => {
      setTip(data.data.tip);
    });
    axios.get("http://localhost:5000/links/").then((data) => {
      console.log(data.data)
      setTip2(data.data.link);
    });
  }, []);
  return (<div><div className="tak">
    <div className="top">Porada:</div>
    <div className="down">{tip}</div>
    </div><div className="tak">
    <div className="top">Zobacz też:</div>
    <div className="down">{tip2}</div>
    </div></div>)
}
