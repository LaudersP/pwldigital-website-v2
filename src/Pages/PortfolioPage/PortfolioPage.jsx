import React from "react";
import PageWrapper from "../../Components/Display/PageWrapper/PageWrapper";
import CopyrightNotice from "../../Components/Display/CopyrightNotice/CopyrightNotice";
import Project from "../../Components/Display/Project/Project";

function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <PageWrapper>
        <CopyrightNotice />
        <Project
          projectName="Developement and Implementation of Smart Robot Assistant Swimming Coach"
          dateStarted="July 2023"
          dateEnded="IN PROGRESS"
          icons={[
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              alt: "Python Icon",
              title: "Python",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
              alt: "Visual Studio Code Icon",
              title: "Visual Studio Code",
            },
          ]}
          iconlessTechnologies={[
            "ChatGPT",
            "Copilot",
            "Gemini",
            "Google Colab",
            "Microsoft Suite",
          ]}
          outcomes={[
            "Led developement to ensure progress is made and meeting deadlines",
            "Conduct research of parts to support project objectives",
            "Manage project expenses closely to ensure adherence to the allocated budget",
            "Research leading-edge AI technologies to ensure the reliability of the model",
            "Train AI models to suit project objectives on custom datasets",
          ]}
          buttonData={[
            {
              iconName: "open_in_new",
              label: "View Abstract",
              type: "navigation",
              destination:
                "https://digitalcommons.shawnee.edu/cos/2024/tuesday/7/",
            },
          ]}
        >
          This project which is funded through the university, involves
          developing a smart robot assistant to provide swimmers with real-time
          feedback on their technique and performance. Utilizing AI-driven deep
          learning systems integrated with commercial mini-computers, the robot
          will analyze critical aspects of swimming techniques, such as stroke
          rate, body alignment, and breathing patterns. It will offer instant,
          actionable advice to enhance training quality, allowing swimmers to
          make immediate adjustments. This innovation will mark a significant
          advancement in sports technology, aiming to set a new standard for
          efficiency and effectiveness in competitive swimming training.
        </Project>
        <Project
          projectName="PWL - Digital Version II"
          dateStarted="August 2024"
          dateEnded="August 2024"
          icons={[
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
              alt: "CSS Icon",
              title: "CSS",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
              alt: "DigitalOcean Icon",
              title: "DigitalOcean",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
              alt: "Git Icon",
              title: "Git",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
              alt: "HTML Icon",
              title: "HTML",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              alt: "JavaScript Icon",
              title: "JavaScript",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              alt: "React.js Icon",
              title: "React.js",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
              alt: "Visual Studio Code Icon",
              title: "Visual Studio Code",
            },
          ]}
          outcomes={[
            "Modernize the user interface for visitors",
            "Gain more expirence programming in JavaScript",
            "Gain more expirence using the React.js framework",
            "Enhance my skills in front-end design and developement",
            "Implement responsive design principles for mobile device support",
            "Develop reusable components, allowing for easier site managment",
          ]}
        >
          This project represents a significant enhancement of my initial
          website, leveraging the React.js front-end framework. By adopting
          React.js, I was able to substantially elevate the quality and
          functionality of my personal portfolio.
        </Project>
        <Project
          projectName="BK State Tracker"
          dateStarted="May 2024"
          dateEnded="July 2024"
          outcomes={[
            "Learn server-side automation and scheduling processes",
            "Gain insights into optimizing software for minimal memory usuage",
            "Begin developing proficiency with the React.js framwork",
            "Expand open-source software projects",
            "Enhance skills in integrating backend data with frontend interfaces",
            "Deepen my understanding of database management software integration",
          ]}
          icons={[
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
              alt: "CSS Icon",
              title: "CSS",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
              alt: "DigitalOcean Icon",
              title: "DigitalOcean",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
              alt: "Git Icon",
              title: "Git",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
              alt: "HTML Icon",
              title: "HTML",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              alt: "JavaScript Icon",
              title: "JavaScript",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              alt: "Python Icon",
              title: "Python",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              alt: "React.js Icon",
              title: "React.js",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
              alt: "SQLite Icon",
              title: "SQL",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
              alt: "Visual Studio Code Icon",
              title: "Visual Studio Code",
            },
          ]}
          images={[
            {
              src: "/project-files/bkstatetracker/home-page.png",
              alt: "Home Page",
              title: "BKStateTracker Home Page",
            },
            {
              src: "/project-files/bkstatetracker/heat-map-page.png",
              alt: "Heat Map Page",
              title: "BKStateTracker Heat Map Page",
            },
          ]}
          buttonData={[
            {
              iconName: "open_in_new",
              label: "View Website",
              type: "navigation",
              destination: "https://bkstatetracker.pwldigital.com/",
            },
          ]}
        >
          <p>
            This project features two key components: a Python-based data
            scraper and an interactive website. The first component is an
            automated scraping tool that routinely gathers data from the BK
            database. It scans for new locations every Monday, updating the
            existing database of approximately 6,500 stores. Additionally, it
            performs daily scrapes to monitor the menu items — around 150 in
            total — and their prices across all tracked stores. This data is
            meticulously stored in an SQLite3 database, ensuring that each menu
            item is retained as long as it is available in at least one store
            per state. A JSON file is generated daily, enabling seamless
            integration with the website.
          </p>
          <p>
            The second component is an interactive website that allows users to
            engage with the collected data. Visitors can select their preferred
            menu items and visualize the price variations across different
            states using a heat map or bar graph. This dynamic tool also offers
            a state-by-state breakdown of store counts, providing a
            comprehensive overview of the data.
          </p>
        </Project>
        <Project
          projectName="Jetson Nano Powered Power Wheels"
          dateStarted="May 2023"
          dateEnded="October 2023"
          outcomes={[
            "Gain a better understanding of datasheets and specification sheets",
            "Gain a better understanding of circuits and PCB design",
            "Learn about the types of A.I. models",
            "Gain the ability for more efficent prototyping",
            "Obtain an introduction to TensorFlow",
            "Obtain an introduction to data augmentation/preprocessing",
          ]}
          icons={[
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
              alt: "Arduino IDE Icon",
              title: "Arduino",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
              alt: "C++ Icon",
              title: "C++",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              alt: "Python Icon",
              title: "Python",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
              alt: "Visual Studio Code Icon",
              title: "Visual Studio Code",
            },
          ]}
          iconlessTechnologies={[
            "ChatGPT",
            "EagleCAD",
            "Fusion360",
            "Microsoft Suite",
          ]}
          buttonData={[
            {
              iconName: "download",
              label: "Download PDF",
              type: "download",
              destination:
                "/project-files/powerwheelsv1/Self Driving Jetson Nano Power Wheels November 2023.pdf",
            },
          ]}
          images={[
            {
              src: "/project-files/powerwheelsv1/front_back.png",
              alt: "Front and Back View Image",
              title: "Front and Back View",
            },
            {
              src: "/project-files/powerwheelsv1/electronics.jpg",
              alt: "Electronics Image",
              title: "Electronics View",
            },
          ]}
        >
          <p>
            This project focused on taking a typical child's Power Wheels
            vehicle and converting it to be self-driven. This project was used
            as a step into learning about A.I. and understanding how companies
            such as Tesla blends the barrier between the automobile industry and
            the computer science realm.
          </p>
          <p>
            This project resulted in two dedicated systems, each tasked with
            their operations. The first is the A.I. "brain," which takes an
            image and predicts the desired move based on the vehicle's location
            on the road. The second is the control system, which interrupts this
            prediction and performs the necessary mechanical action. These
            include turning the steering assembly, powering the motors, using
            safety indicators, or auto braking.
          </p>
        </Project>
        <Project
          projectName="PWL - Digital Version I"
          dateStarted="September 2023"
          dateEnded="October 2023"
          icons={[
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
              alt: "CSS Icon",
              title: "CSS",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
              alt: "DigitalOcean Icon",
              title: "DigitalOcean",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
              alt: "Git Icon",
              title: "Git",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
              alt: "HTML Icon",
              title: "HTML",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              alt: "JavaScript Icon",
              title: "JavaScript",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
              alt: "Visual Studio Code Icon",
              title: "Visual Studio Code",
            },
          ]}
          outcomes={[
            "Design and develop my first website",
            "Showcase an extensive portfolio of Computer Science and Computer Engineering projects",
            "Enhanc my professional visibility and accessibility",
            "Achieve seamless integration of multimedia elements",
          ]}
          buttonData={[
            {
              iconName: "open_in_new",
              label: "View Archive",
              type: "navigation",
              destination: "https://v1.pwldigital.com/",
            },
          ]}
        >
          This project marked my initial venture into web development, primarily
          focused on mastering HTML. Through this effort, I laid the foundation
          for my digital presence, enabling me to share my work more easily
          online.
        </Project>
      </PageWrapper>
    </div>
  );
}

export default PortfolioPage;
