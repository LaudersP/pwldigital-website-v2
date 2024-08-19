import React, { useState, useEffect } from "react";
import "./PDFViewer.css";

import Button from "../../Interaction/Button/Button";

const PDFViewer = ({ label, filename, alt, title, filePath }) => {
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setIsSupported(false);
      } else {
        setIsSupported(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <div className="pdfviewer-container">
      <div className="pdfviewer-label">{label}</div>
      <div className="pdfviewer-content">
        {isSupported ? (
          <img
            src={filename}
            alt={alt}
            title={title}
            onContextMenu={handleContextMenu}
          />
        ) : (
          <div className="unsupported-message">
            This device does not support the viewer. Please download the file
            instead.
          </div>
        )}
      </div>
      <div className="download-button">
        <Button
          iconName="download"
          label="Download PDF"
          type="download"
          destination={filePath}
        />
      </div>
    </div>
  );
};

export default PDFViewer;
