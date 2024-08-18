import React from "react";
import "./AboutMeSection.css";

function AboutMeSection() {
  return (
    <div className="AboutMeSection">
      <img
        src="/images/headshot.png"
        alt="Headshot October 2023"
        className="AboutMeSection-image"
      />
      <div className="AboutMeSection-summary">
        <p>
          Hi, my name is <b>Parker Lauders</b>!
        </p>
        <p>
          I'm a <b>Junior</b> pursuing a <b>B.S.</b> in{" "}
          <b>Computer Engineering Technology</b> <b>minoring</b> in{" "}
          <b>Computer Aided Design & Drafting</b>. I expect to graduate in{" "}
          <b>May 2026</b>. My passion lies in crafting innovative software and
          hardware solutions, and I'm pursuing a career as a{" "}
          <b>Software Engineer</b>.
        </p>
        <p>
          Throughout my academic journey, I've honed my skills in{" "}
          <b>various programming languages</b>, <b>programming environments</b>,
          and <b>design softwares</b>. I constantly seek opportunities to apply
          my knowledge through hands-on projects, <b>internships</b>, and
          collaborations.
        </p>
      </div>
    </div>
  );
}

export default AboutMeSection;
