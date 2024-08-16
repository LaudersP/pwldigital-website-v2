import React from "react";
import "./CopyrightNotice.css";

function CopyrightNotice() {
  return (
    <div className="portfolio-page-copyright-notice">
      <p className="copyright-notice">
        <b>Notice:</b> All work published on this page is licensed under{" "}
        <a
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
        >
          CC BY-NC-SA 4.0
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
            alt="CC Icon"
          />
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
            alt="Attribution Icon"
          />
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
            alt="NonCommercial Icon"
          />
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
            alt="ShareAlike Icon"
          />
        </a>{" "}
        unless stated otherwise!
      </p>
    </div>
  );
}

export default CopyrightNotice;
