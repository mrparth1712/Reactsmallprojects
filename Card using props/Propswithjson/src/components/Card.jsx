import React from "react";

export default function Card({ movie }) {
  const { poster, name, rating, lastUpdated, running_time } = movie;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col">
      <img src={poster} alt={name} className="w-full h-52 object-cover" />

      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
            <span className="bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">
              ⭐ {rating}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">🕒 Last Updated:</span> {lastUpdated}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">⏱ Running Time:</span> {running_time}
          </p>
        </div>
      </div>
    </div>
  );
}
