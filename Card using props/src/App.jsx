import React from "react";
import Card from "./components/Card";

export default function App() {
  const movie1 = {
    name: "Avengers: Endgame",
    rating: 8.8,
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-VryHIj_dFA8UMpm7X7y7_DWfvDk6jqi5Hw&s",
    lastUpdated: "SUN 8 SEPT – 10:00 PM",
    running_time: "2HR 08MIN",
  };

  const movie2 = {
    name: "The Dark Knight",
    rating: 9.0,
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw3HwOprt6Ysg5k_6jt5qCIdPwGV_9jgV0-Q&s",
    lastUpdated: "MON 12 SEPT – 08:30 PM",
    running_time: "2HR 32MIN",
  };

  const movie3 = {
    name: "Inception",
    rating: 8.8,
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-VryHIj_dFA8UMpm7X7y7_DWfvDk6jqi5Hw&s",
    lastUpdated: "TUE 15 SEPT – 09:15 PM",
    running_time: "2HR 28MIN",
  };

  return (
    <div>
      <Card movie={movie1} />
      <Card movie={movie2} />
      <Card movie={movie3} />
    </div>
  );
}
