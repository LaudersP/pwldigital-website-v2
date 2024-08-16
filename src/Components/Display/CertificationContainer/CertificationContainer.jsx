import React from "react";
import "./CertificationContainer.css";

function CertificationContainer({ certName, location, date }) {
  return (
    <div className="certification">
      <div className="certification-name">{certName}</div>
      <div className="certification-info">
        <div className="location">
          <span class="material-symbols-outlined">school</span>{" "}
          <span className="location-label">{location}</span>
        </div>
        <div className="date">
          <span class="material-symbols-outlined">event</span>{" "}
          <span className="date-label">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default CertificationContainer;
