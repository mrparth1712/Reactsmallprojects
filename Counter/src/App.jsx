import React from "react";
import Counter from "./components/Counter";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#f6f7fb",
      }}
    >
      <Counter />
    </div>
  );
}
