import React from "react";
import "../styles/Start.css";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div className="start-container">
      <div className="start-content">
        <h1 className="start-heading">🍎Fruit Count</h1>
        <p className="start-sub-heading">can you count all the fruits?</p>
        <Link to="/level">
          <button className="start-button">
            <h2>Start Counting</h2>
          </button>
        </Link>
      </div>
    </div>
  );
}
