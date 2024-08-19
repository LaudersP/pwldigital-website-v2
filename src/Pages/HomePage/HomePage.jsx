import React from "react";
import "./HomePage.css";

import AboutMeSection from "../../Components/Display/AboutMeSection/AboutMeSection";
import PageWrapper from "../../Components/Display/PageWrapper/PageWrapper";
import Section from "../../Components/Display/Section/Section";
import CertificationContainer from "../../Components/Display/CertificationContainer/CertificationContainer";

function HomePage() {
  return (
    <div className="HomePage">
      <PageWrapper>
        <AboutMeSection />
        <Section label="My Skills" bottomBorder={false}>
          <Section label="Advanced In" innerSection>
            <div className="icons">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
                alt="Arduino IDE Icon"
                title="Arduino"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                alt="C++ Icon"
                title="C++"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git Icon"
                title="Git"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python Icon"
                title="Python"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                alt="Visual Studio Code Icon"
                title="Visual Studio Code"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
                alt="Visual Studio Icon"
                title="Visual Studio"
              />
            </div>
          </Section>
          <Section label="Experienced In" innerSection>
            <div className="icons">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                alt="C Icon"
                title="C"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS Icon"
                title="CSS"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg"
                alt="DigitalOcean Icon"
                title="DigitalOcean"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML Icon"
                title="HTML"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript Icon"
                title="JavaScript"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React.js Icon"
                title="React.js"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                alt="SQLite Icon"
                title="SQL"
              />
            </div>
          </Section>
          <Section label="Applications Without Icons" innerSection>
            <div className="text-list">
              <span>AutoCAD</span>
              <span>ChatGPT</span>
              <span>Copilot</span>
              <span>EagleCAD</span>
              <span>Fusion360</span>
              <span>Gemini</span>
              <span>Google Workspace</span>
              <span>Google Colab</span>
              <span>Inventor</span>
              <span>Microsoft Suite</span>
              <span>Multisim</span>
              <span>SolidWorks</span>
            </div>
          </Section>
        </Section>
        <Section label="Certifications" bottomBorder>
          <CertificationContainer
            certName="Engineering and Design Vocational Program"
            location="Southern Hills Career & Technical Center"
            date="May 2022"
          />
          <CertificationContainer
            certName="Lean Six Sigma Green Belt"
            location="Southern Hills Career & Technical Center"
            date="April 2022"
          />
          <CertificationContainer
            certName="Rockwell Automation Level I"
            location="Southern Hills Career & Technical Center"
            date="April 2021"
          />
          <CertificationContainer
            certName="FANUC Basic Programming, Setup, and Operation"
            location="Southern Hills Career & Technical Center"
            date="May 2021"
          />
        </Section>
      </PageWrapper>
    </div>
  );
}

export default HomePage;
