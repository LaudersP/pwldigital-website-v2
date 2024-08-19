import React from "react";

import PageWrapper from "../../Components/Display/PageWrapper/PageWrapper";
import PDFViewer from "../../Components/Display/PDFViewer/PDFViewer";

function ResumePage() {
  return (
    <PageWrapper>
      <PDFViewer
        filename="/images/resume-8-9-2024.jpg"
        alt="Image of my resume. For the latest version, please visit my LinkedIn profile under the 'socials' tab."
        title="Resume (Updated: August 8, 2024)"
        filePath="/files/Parker-Lauders-Computer-Engineering-Technology-May-2026.pdf"
      />
    </PageWrapper>
  );
}

export default ResumePage;
