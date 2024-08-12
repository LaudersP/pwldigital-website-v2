import React from "react";
import "./Section.css";

function Section({
  label,
  children,
  innerSection = false,
  bottomBorder = false,
  topOfPage = false,
}) {
  const sectionClassName = innerSection
    ? "section-inner"
    : "section" + (topOfPage ? " section-top" : "");

  const borderClassName = bottomBorder ? "with-border" : "";

  return (
    <div className={`${sectionClassName} ${borderClassName}`}>
      <div className={innerSection ? "section-label-inner" : "section-label"}>
        {label}
      </div>
      <div
        className={innerSection ? "section-content-inner" : "section-content"}
      >
        {children}
      </div>
    </div>
  );
}

export default Section;
