import React from "react";
import "./Button.css";

import PropTypes from "prop-types";

function Button({ iconName, label, type, destination }) {
  const handleClick = () => {
    if (type === "navigation") {
      window.open(destination, "_blank");
    } else if (type === "download") {
      const link = document.createElement("a");
      link.href = destination;
      link.download = destination.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button onClick={handleClick} className="button">
      <div className="button-content">
        <span className="material-symbols-outlined">{iconName}</span>
        <span class="button-label">{label}</span>
      </div>
    </button>
  );
}

Button.propTypes = {
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["navigation", "download"]).isRequired,
  destination: PropTypes.string,
};

export default Button;
