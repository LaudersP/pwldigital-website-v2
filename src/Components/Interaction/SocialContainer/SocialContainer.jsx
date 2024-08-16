import React from "react";
import "./SocialContainer.css";

function SocialContainer({ src, alt, siteName, siteURL }) {
  const handleOnClick = () => {
    window.open(siteURL, "_blank");
  };

  return (
    <button className="social-container" onClick={handleOnClick}>
      <img src={src} alt={alt} />
      <span className="siteName">{siteName}</span>
    </button>
  );
}

export default SocialContainer;
