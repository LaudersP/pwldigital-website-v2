import React from "react";
import "./WorkshopPage.css";

import PageWrapper from "../../Components/Display/PageWrapper/PageWrapper";
import Section from "../../Components/Display/Section/Section";

function WorkshopPage() {
  return (
    <div className="workshop-page">
      <PageWrapper>
        <div className="workshop-page-banner">
          <img src="/images/workshop.jpg" alt="Workshop" title="Workshop" />
        </div>
        <Section label="Manufacturing Equipment" bottomBorder={false}>
          <Section label="Additive Manufacturing" innerSection>
            <ul id="additive-manufacturing">
              <li>Anycubic Photon</li>
              <li>Bambu Lab X1-Carbon</li>
              <li>Creality CR-10</li>
            </ul>
          </Section>
          <Section label="Subtractive Manufacturing" innerSection>
            <ul id="subtractive-manufacturing">
              <li>K40 Laser Cutter</li>
              <li>SainSmart 3018-Prover CNC</li>
            </ul>
          </Section>
        </Section>
        <Section label="Electronic Equipment" bottomBorder={false}>
          <Section label="Soldering Equipment" innerSection>
            <ul id="soldering-equipment">
              <li>Weller WE1010NA Soldering Station</li>
              <li>Soiiw Hot/Reflow Plate</li>
              <li>YIHUA 929D-V Desoldering Sucker</li>
            </ul>
          </Section>
          <Section label="Testing Equipment" innerSection>
            <ul id="testing-equipment">
              <li>8-Channel Logic Analyzer</li>
              <li>Andonstar AD246S-M Digial Microscope</li>
              <li>B&K Precision 2831C DMM</li>
              <li>Tektronix 465M Oscilloscope</li>
            </ul>
          </Section>
          <Section label="Microcontrollers" innerSection>
            <ul id="microcontrollers">
              <li>Arduino Mega</li>
              <li>Arduino Micro</li>
              <li>Arduino Nano</li>
              <li>Arduino Uno</li>
              <li>Raspberry Pico (Series)</li>
              <li>Teensy 4.0</li>
            </ul>
          </Section>
          <Section label="Single Board Computers" innerSection>
            <ul id="single-board-computers">
              <li>NVIDIA Jetson Nano</li>
              <li>Raspberry Pi 2B</li>
              <li>Raspberry Pi 3A</li>
              <li>Raspberry Pi 3B</li>
            </ul>
          </Section>
        </Section>
        <Section label="Softwares Used" bottomBorder>
          <Section label="Design" innerSection>
            <ul id="design">
              <li>AutoCAD</li>
              <li>EagleCAD</li>
              <li>Fusion360</li>
              <li>Inventor</li>
              <li>Multisim</li>
              <li>SolidWorks</li>
            </ul>
          </Section>
          <Section label="Coding" innerSection>
            <ul id="coding">
              <li>Arduino IDE</li>
              <li>DB Browser (SQLite)</li>
              <li>Google Colab</li>
              <li>Visual Studio Code</li>
              <li>Visual Studio</li>
            </ul>
          </Section>
          <Section label="CAM" innerSection>
            <ul id="cam">
              <li>Bambu Studio</li>
              <li>CANDLE GRBL Controller</li>
              <li>Cura</li>
              <li>FlatCAM</li>
            </ul>
          </Section>
        </Section>
      </PageWrapper>
    </div>
  );
}

export default WorkshopPage;
