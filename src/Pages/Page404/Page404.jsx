import React from "react";
import "./Page404.css";

import PageWrapper from "../../Components/Display/PageWrapper/PageWrapper";
import Button from "../../Components/Interaction/Button/Button";

function Page404() {
  return (
    <div className="page-404">
      <PageWrapper>
        <div className="error-message">
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <Button
            iconName="home"
            label="Home Page"
            type="navigation"
            destination="/"
            internalRoute
          />
        </div>
      </PageWrapper>
    </div>
  );
}

export default Page404;
