import React from "react";
import "./PageWrapper.css";

function PageWrapper({ children }) {
  return (
    <div className="pagewrapper">
      <div className="pagewrapper-page-content">{children}</div>
    </div>
  );
}

export default PageWrapper;
