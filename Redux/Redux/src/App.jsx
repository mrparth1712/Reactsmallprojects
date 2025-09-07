import React from "react";
import Addtodo from "./components/Addtodo";
import Todos from "./components/Todos";

export default function App() {
  return (
    <div>
      <h1>learn about redux toolkit</h1>
      <Addtodo />
      <Todos />
    </div>
  );
}
