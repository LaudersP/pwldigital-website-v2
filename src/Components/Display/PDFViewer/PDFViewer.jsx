import React from "react";
import "./PDFViewer.css";

import Button from "../../Interaction/Button/Button";

const PDFViewer = ({ label, filename, alt, title }) => {
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <div className="pdfviewer-label">
      <div className="pdfviewer-label">{label}</div>
      <div className="pdfviewer-pdf">
        <img
          src={filename}
          alt={alt}
          title={title}
          onContextMenu={handleContextMenu}
        />
      </div>
      <div className="download-button">
        <Button
          iconName="download"
          label="Download PDF"
          type="download"
          destination="/files/Parker Lauders Computer Engineering Technology.pdf"
        />
      </div>
    </div>
  );
};
export default PDFViewer;
