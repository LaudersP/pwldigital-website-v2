import React from "react";

import PageWrapper from "../../Components/Display/PageWrapper/PageWrapper";
import PDFViewer from "../../Components/Display/PDFViewer/PDFViewer";

function ResumePage() {
  return (
    <PageWrapper>
      <PDFViewer
        label=""
        filename="/images/resume-8-9-2024.jpg"
        alt="To view my resume please visit my LinkedIn profile under the `socials` tab!"
        title="Resume (Updated: August 8, 2024)"
      />
    </PageWrapper>
  );
}

export default ResumePage;
