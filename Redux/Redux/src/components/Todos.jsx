import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../redux/todoslice";

export default function Todos() {
  // ✅ Correctly access todos from slice
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Todos</h2>
      {todos.length === 0 ? (
        <p>No todos yet!</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <span>{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
