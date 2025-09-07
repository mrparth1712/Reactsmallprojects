import React, { useState } from "react";
import "../styles/Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const inc = () => setCount((c) => c + 1);
  const dec = () => setCount((c) => (c > 0 ? c - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h1 className="counter__title">Counter</h1>

      <div className="counter__value" aria-live="polite" aria-atomic="true">
        {count}
      </div>

      <div className="counter__actions">
        <button className="btn btn--ghost" onClick={dec} aria-label="Decrease">
          −
        </button>
        <button
          className="btn btn--primary"
          onClick={inc}
          aria-label="Increase"
        >
          +
        </button>
      </div>

      <button className="btn btn--reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
