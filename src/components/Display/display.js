import React from "react";
import "./display.css";

const Display = ({ list }) => {
  return (
    <div className="grid-container">
      {list.map((l, i) => (
        <div key={i} className="grid-item card text-white bg-dark mb-3">
          <div className="card-body">
            <div className="card-title">
              <h3>{l.name}</h3>
            </div>
            <div className="card-subtitle mb-2 text-muted">{l.episode}</div>
            <p className="card-text">
              <small>
                <i>{l.air_date}</i>
              </small>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Display;
