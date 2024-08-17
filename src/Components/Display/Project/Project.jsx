import React from "react";
import "./Project.css";

import Section from "../Section/Section";
import Button from "../../Interaction/Button/Button";
import ImageContainer from "../../Interaction/ImageContainer/ImageContainer";

function Project({
  projectName,
  dateStarted,
  dateEnded,
  children,
  icons = [],
  iconlessTechnologies = [],
  outcomes = [],
  images = [],
  buttonData,
}) {
  if (buttonData) {
    console.log("TEST", buttonData.iconName);
  }

  return (
    <div className="project">
      <Section label={projectName} bottomBorder={false}>
        <div className="project-date">
          <h2>
            {dateStarted} - {dateEnded}
          </h2>
        </div>
        <div className="project-summary">{children}</div>
        <div className="project-outcome">
          <h2>From this project, I was able to:</h2>
          <ul>
            {outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
        <Section label="Skills Used" innerSection>
          <div className="project-icons">
            {icons.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                title={icon.title}
                className="project-icon"
              />
            ))}
            {iconlessTechnologies.length > 0 && (
              <div className="project-icon-less">
                {iconlessTechnologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            )}
          </div>
        </Section>
        {images.length > 0 && (
          <Section label="Project  Images" innerSection>
            <div className="project-images">
              {images &&
                images.map((image) => (
                  <ImageContainer
                    imageURL={image.src}
                    altText={image.alt}
                    title={image.title}
                  />
                ))}
            </div>
          </Section>
        )}
        {buttonData &&
          buttonData.map((button, index) => (
            <div className="project-view">
              <Button
                iconName={button.iconName}
                label={button.label}
                type={button.type}
                destination={button.destination}
              />
            </div>
          ))}
      </Section>
    </div>
  );
}

export default Project;
