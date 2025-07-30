import React from "react";
import "./card.css";

export default function Card({ movie }) {
  const { poster, name, rating, lastUpdated, running_time } = movie;

  return (
    <div className="container">
      <div className="card">
        <img src={poster} alt={name} />

        <div className="card-content">
          <div className="card-header">
            <h3 className="movie-title">{name}</h3>
            <span className="movie-rating">{rating}/10</span>
          </div>

          <div className="card-footer">
            <div className="footer-item">
              <p className="footer-label">LAST UPDATE</p>
              <p className="footer-value">{lastUpdated}</p>
            </div>
            <div className="footer-item">
              <p className="footer-label">RUNNING TIME</p>
              <p className="footer-value">{running_time}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
