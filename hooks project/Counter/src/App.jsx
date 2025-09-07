import React, { useState } from "react";
import "./app.css";

export default function App() {
  const [value, setValue] = useState(0);

  const incValue = () => {
    setValue(value + 1);
  };
  const decValue = () => {
    setValue(value - 1);
  };
  return (
    <div>
      <h2>counter:{value}</h2>
      <button onClick={incValue}>inc</button>
      <br />
      <br />
      <button onClick={decValue}>dec</button>
    </div>
  );
}
