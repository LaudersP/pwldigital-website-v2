import React, { useState, useEffect } from "react";
import "./ImageContainer.css";

function ImageContainer({ imageURL, altText, title }) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOverlay = () => {
    setIsOverlayOpen(true);
    document.body.classList.add("no-scroll");
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
    document.body.classList.remove("no-scroll");
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="image-container">
      <img
        src={imageURL}
        alt={altText}
        title={title}
        className="thumbnail"
        onClick={openOverlay}
      />

      {isOverlayOpen && (
        <div className="overlay" onClick={closeOverlay}>
          <span className="close" onClick={closeOverlay}>
            &times;
          </span>
          <img src={imageURL} alt={altText} className="overlay-content" />
        </div>
      )}
    </div>
  );
}

export default ImageContainer;
