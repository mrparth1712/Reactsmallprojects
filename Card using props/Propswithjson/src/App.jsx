import React from "react";
import movies from "./data.json";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        🎥 Movie Showcase
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.map((movie, index) => (
          <Card key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}
